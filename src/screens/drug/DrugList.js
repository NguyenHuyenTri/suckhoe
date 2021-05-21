import React from 'react';
import { View ,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/covid-19/SearchBar'
import {theme} from '../../core/theme'
import DrugCard from '../../components/drug/CardDrug'
const DrugList = ({ navigation }) => {
    return <>
        <SafeAreaView style={styles.root}>
            <SearchBar  />
            <DrugCard navigation={navigation}/>
        </SafeAreaView>
    </>
}


const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#FFFFFF'
    }
})
export default DrugList;