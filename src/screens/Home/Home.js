import React, {useEffect } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native';
import 'moment'
import Header from '../../components/Home/Headers';
import Icons from '../../components/Home/Icons';
import { theme } from '../../core/theme';
import Slide from '../../components/Home/Slide'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {



    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
            alert('Lỗi')
        }
    }

    useEffect(() => {
        storeData({ skip: true })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Header navigation={navigation} />

            <ScrollView>
                <Slide />
                <View style={styles.iconContainer}>
                    <View style={styles.item}>
                        <Icons bgColor={theme.home.gridview} name="viruses" color="red" navigation={navigation}
                            navigate='HomeCovidScreen'
                        >Covid-19</Icons>
                        <Icons bgColor={theme.home.gridview} name="capsules" color={theme.home.icon} navigation={navigation}
                            navigate='DrugScreen'
                        >Thuốc</Icons>
                    </View>
                    <View style={styles.item}>
                        <Icons bgColor={theme.home.gridview} name="child" color={theme.home.icon}
                            navigation={navigation} navigate='BodyScreen' navigation={navigation}>Bệnh theo vùng{'\n'} cơ thể</Icons>
                        <Icons bgColor={theme.home.gridview} name="cloud-sun" color={theme.home.icon}
                            navigation={navigation} navigate='WeatherScreen'>Bệnh theo mùa</Icons>
                    </View>
                    <View style={styles.item}>
                        <Icons bgColor={theme.home.gridview} name="newspaper" color={theme.home.icon}
                            navigation={navigation} navigate='CategoryScreen' >Bài viết</Icons>
                        <Icons bgColor={theme.home.gridview} name="file-medical-alt" color={theme.home.icon}
                            navigation={navigation} navigate='HistoryScreen' >Lịch sử</Icons>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backGround,
        justifyContent: 'center',
    },
    iconContainer: {
        marginTop: '1%',
        marginBottom: '3%',
        width: '95%',
        height: '45%',
        marginLeft: '2.5%',
        alignSelf: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        marginBottom: 5,
    }

})
export default HomeScreen;
