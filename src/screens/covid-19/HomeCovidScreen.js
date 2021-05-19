import React, { memo, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    
} from 'react-native';
import 'moment'
import {theme} from '../../core/theme'
import StatusBar from '../../components/StatusBar/StatusBar'
import SearchBar from '../../components/covid-19/SearchBar'
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
            <StatusBar/>
            <View style={styles.container}>
               <SearchBar/>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
})
export default memo(HomeCovidScreen);
