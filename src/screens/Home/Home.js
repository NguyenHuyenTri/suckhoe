import React, { memo ,useState ,useEffect} from 'react';
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
import {theme} from '../../core/theme'

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff"  barStyle="dark-content" />
            <Header navigation={navigation} />
            <ScrollView>
            <View style={styles.iconContainer}>
                <View style={{flex: 1, flexDirection: 'row',height:130}}>
                    <Icons bgColor="red" name="viruses" color="red" navigation={navigation} 
                    navigate='HomeCovidScreen'
                    >COVID-19</Icons>
                    <Icons bgColor="#E2E2E2" name="capsules" color={theme.colors.appbar} navigation={navigation} 
                        navigate='HomeCovidScreen'
                    >Thuốc</Icons>
                </View>
                <View style={{flex: 1, flexDirection: 'row',height:150}}>
                    <Icons bgColor="#E2E2E2" name="child" color="#F5AD47"
                    navigation={navigation} navigate='HomeCovidScreen'>Bệnh theo vùng{'\n'} cơ thể</Icons>
                    <Icons bgColor="#E2E2E2" name="cloud-sun" color="#F5AD47"
                    navigation={navigation} navigate='HomeCovidScreen'>Bệnh theo mùa</Icons>
                </View>
                <View style={{flex: 1, flexDirection: 'row',height:130}}>
                    <Icons bgColor="#E2E2E2" name="clinic-medical" color="#F5AD47"
                    navigation={navigation} navigate='HomeCovidScreen' >Tra cứu thuốc</Icons>
                    <Icons bgColor="#E2E2E2" name="newspaper" color="#F5AD47"
                    navigation={navigation}navigate='HomeCovidScreen' >Tin tức</Icons>
                </View>
                <View style={{flex: 1, flexDirection: 'row',height:130}}>
                    <Icons bgColor="#E2E2E2" name="newspaper" color="#F5AD47"
                     navigation={navigation}navigate='HomeCovidScreen' >Bài viết</Icons>
                    <Icons bgColor="#E2E2E2" name="ellipsis-v" color="#F5AD47"
                    navigation={navigation}navigate='HomeCovidScreen' >Xem thêm</Icons>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
    },
    cards: {
        marginTop: -90
    },
    casesHeading: {
        color: '#FFF',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 30
    },
    flatList: {
        marginTop: 10
    },
    iconContainer: {
        marginTop:'1%',
        marginBottom:'3%',
        width: '95%',
        height: '45%',
        marginLeft:'2.5%',
        alignSelf: 'center',
    },
   
})
export default memo(HomeScreen);
