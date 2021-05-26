'use strict';

import React, { Component } from 'react';

import {
    TouchableOpacity,
    Linking,
    Dimensions,
    Image,
    Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { useSelector, useDispatch } from "react-redux";
import { get as _get } from 'lodash';
import { GetAllDrugRequest } from '../../reducer/Drug/DrugAction';
import { theme } from '../../core/theme';

function QrCodeScan({ navigation }) {

    const dispatch = useDispatch();
    const [state, setstate] = React.useState(false)
    const [scan, setscan] = React.useState(true);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const drug = useSelector((state) => _get(state, "drug.drugs", []));

    const onSuccess = e => {
        setscan(false);
        if (Number.isInteger(parseInt(e.data)) === true) {
            let temp = false;
            for (let index = 0; index < drug.length; index++) {
                if (parseInt(drug[index].barcode) === parseInt(e.data)) {
                    setscan(true);
                    temp = true;
                    navigation.navigate('DrugDetailsScreen', drug[index]);
                    break;
                }
            }
            if (!temp) {
                Alert.alert(
                    "Thông báo",
                    `Không tìm thấy ${e.data}`,
                    [
                        {
                            text: "Đóng",
                            onPress: () => setscan(true),
                            style: "cancel"
                        },
                    ],
                    { cancelable: false }
                );
            }
        } else {
            Linking.openURL(e.data).catch(err => {
                Alert.alert(
                    "Thông báo",
                    `${e.data}`,
                    [
                        {
                            text: "Đóng",
                            onPress: () => setscan(true),
                            style: "cancel"
                        },
                    ],
                    { cancelable: false }
                );
            }
            );
        }
        setscan(true)
    };

    React.useEffect(() => {
        dispatch(GetAllDrugRequest());
    }, [])

    return (
        <>
            <TouchableOpacity onPress={() => setstate(!state)} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/switch-camera.png')}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <QRCodeScanner style={{ flex: 1 }}
                onRead={onSuccess}
                reactivate={scan}
                fadeIn={false}
                cameraType={state ? 'front' : 'back'}
                permissionDialogMessage={'Cần sự cho phép để truy cập máy ảnh'}
                reactivateTimeout={1000}
                showMarker={true}
                containerStyle={{ backgroundColor: '#FFFFFF' }}
                markerStyle={{ borderColor: theme.colors.inActiveColor, borderRadius: 10, marginBottom: '25%' }}
                cameraStyle={{ width: windowWidth, alignSelf: 'center', height: windowHeight - 50 }}
            />
        </>
    );
}


export default QrCodeScan;

