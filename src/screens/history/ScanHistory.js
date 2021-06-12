import React from 'react';
import {
    View,
    StyleSheet, Image,
    Text, TouchableOpacity, FlatList,Linking
} from 'react-native';
import { theme } from '../../core/theme';
import { useSelector, useDispatch } from "react-redux";
import { get as _get } from 'lodash';
import { GetAllHistoryScanRequest } from '../../reducer/User/UserAction';
import Clipboard from '@react-native-clipboard/clipboard';
import { Snackbar } from 'react-native-paper';

function SecondHistoryScreen() {

    const dispatch = useDispatch();
    const scan = useSelector((state) => _get(state, "user.historyscan", []));

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(true);
    const onDismissSnackBar = () => setVisible(false);

    React.useEffect(() => {
        dispatch(GetAllHistoryScanRequest());
    }, [])

    const coppy =(url) =>{
        Clipboard.setString(url);
        onToggleSnackBar();
    }

    const open = (url) =>{
        Linking.openURL(url).catch((err)=>{
            console.log(err);
        })
    }

    if (scan.length > 0) {
        return (
            <View style={styles.root}>
                <FlatList
                    style={styles.boxList}
                    data={scan}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.box}>
                                <View style={{ width: '85%' }}>
                                    <TouchableOpacity onPress={()=>open(item.url)}>
                                        <Text style={styles.name}>{item.url.length > 68 ? item.url.substring(0, 68) + '...' : item.url}</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={()=>coppy(item.url)} style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={styles.image}
                                        source={require('../../assets/copyimage.jpg')} />
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
                <Snackbar style={{ backgroundColor: '#E35757', }}
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Đóng',
                        onPress: () => {onDismissSnackBar}
                    }}>
                    Copy thành công
      </Snackbar>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginTop: 20 }}>Lịch sử của bạn hiện đang trống</Text>
        </View>
    )
}
export default React.memo(SecondHistoryScreen);

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    boxList: {
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 30,
    },
    box: {
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 8,
        backgroundColor: theme.colors.backGround,
        flexDirection: 'row',
        borderRadius: 10,

    },
    image: {
        width: 30,
        height: 30,
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000000",
        marginLeft: 10,
    },
    category: {
        fontSize: 13,
        color: "#000000",
        marginLeft: 10,
    },
})
