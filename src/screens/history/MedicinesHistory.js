
import React, { useEffect } from 'react';
import Spinner from 'react-native-spinkit';
import {
    Text, View,Image
} from 'react-native';
import {theme} from '../../core/theme';
import { useSelector, useDispatch } from "react-redux";
import { get as _get } from 'lodash';
import { GetAllUserRequest } from '../../reducer/User/UserAction';
import DrugCard from '../../components/drug/CardDrug';

function FirstHistoryScreen(props) {
    const dispatch = useDispatch();
    const history = useSelector((state) => _get(state, "user.history", []));


    useEffect(() => {
        dispatch(GetAllUserRequest());
    }, [])

    if (history.length > 0) {
        return (
            <DrugCard data={history} navigation={props.navigation} />
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center',alignItems:'center' }}>
            <Text style={{fontSize: 18 ,marginTop:20 }}>Lịch sử của bạn hiện đang trống</Text>
        </View>

    )
}
export default React.memo(FirstHistoryScreen);