import React, { memo, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from 'react-native';
import 'moment'
import { Tab } from 'react-native-elements';
import {theme} from '../../core/theme'

const HomeCovidScreen = ({ navigation }) => {


    const url = "https://api.covid19api.com/summary";
    const urlVn = 'https://api.covid19api.com/total/country/vn'

    const [data, setData] = useState();
    const [dataVn, setDataVN] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                const resultvn = await fetch(urlVn);
                const responsevn = await resultvn.json();
                setData(response)
                setDataVN(responsevn[responsevn.length - 1])
                setIsloading(false);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.appbar}  barStyle="dark-content" />
            <View style={styles.container}>
                <Tab>
                    <Tab.Item title="Recent" />
                    <Tab.Item title="favourite" />
                    <Tab.Item title="cart" />
                </Tab>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 30
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
        marginTop: '1%',
        marginBottom: '3%',
        width: '95%',
        height: '45%',
        marginLeft: '2.5%',
        alignSelf: 'center',
    }

})
export default memo(HomeCovidScreen);
