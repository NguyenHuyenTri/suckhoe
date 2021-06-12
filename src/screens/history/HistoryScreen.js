import React, { useEffect } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
    View,
    Image,
    Text, useWindowDimensions,
} from 'react-native';
import { theme } from '../../core/theme';
import FirstHistoryScreen from './MedicinesHistory';
import SecondHistoryScreen from './ScanHistory';
import { get as _get } from 'lodash';
import { useSelector } from "react-redux";
const History = ({ navigation }) => {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const users = useSelector((state) => _get(state, "user.users", []));

    const [routes] = React.useState([
        { key: 'first', title: 'Sản phẩm' },
        { key: 'second', title: 'Quét' },
    ]);

    const renderScene = SceneMap({
        first:()=> <FirstHistoryScreen navigation={navigation} />,
        second:()=><SecondHistoryScreen  navigation={navigation} />,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.home.icon, height: 4 }}
            style={{
                backgroundColor: theme.colors.activeColor, elevation: 0,
                shadowOpacity: 0, borderColor: 'none'
            }}
            activeColor={theme.colors.appbar}
            inactiveColor={theme.colors.text}
            pressColor={'white'}
        />
    );

    if(!users.emailVerified){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:150,height:150}} source={require('../../assets/sorry.png')}/>
                    <Text style={{fontSize:18,marginTop:10,textAlign:'center'}}>Vui lòng đăng nhập để sử dụng</Text>
            </View>
        )
    }

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}


export default History;