import React, { useState, useEffect } from 'react';
import { StyleSheet  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/covid-19/SearchBar';
import DrugCard from '../../components/drug/CardDrug';
import Loading from '../../components/body/Loading'
import { useSelector, useDispatch } from "react-redux";
import { get as _get } from 'lodash';
import { GetAllDrugRequest } from '../../reducer/Drug/DrugAction';

const DrugList = ({ navigation }) => {

    const dispatch = useDispatch();
    const drug = useSelector((state) => _get(state, "drug.drugs", []));


    const [data, setData] = useState(drug);
    const [tempData, setTempData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(drug);
        setTempData(drug);
    }, [drug])

    useEffect(() => {
        if (drug.length === 0) {
            fetchDrugData();
        }
    }, [])

    const fetchDrugData = async () => {
        try {
            dispatch(GetAllDrugRequest());
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        } catch (error) {
            setLoading(false)
        }
    }

    const handleChangeSearch = (value) => {
        const changeDate = [];
        if (tempData != null) {
            tempData.map((item) => {
                if (to_slug(item.ten).indexOf(to_slug(value)) > -1||to_slug(item.loai).indexOf(to_slug(value)) > -1) {
                    changeDate.push(item)
                }
            })
        }
        if (changeDate.length > 0) {
            setData(changeDate);
        } else if (value.length === 0) {
            setData(tempData)
        }
    }
    const handleCancel = () => {
        setData(tempData);
    }

    return (
        <SafeAreaView style={styles.root} >
            {
                loading && drug.length === 0 ? <Loading /> :
                    <>
                        <SearchBar handleChangeSearch={handleChangeSearch} handleCancel={handleCancel} />
                        <DrugCard data={data} navigation={navigation} />
                    </>
            }
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})
export default DrugList;

function to_slug(str) {
    str = str.toLowerCase();
    str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???)/g, 'a');
    str = str.replace(/(??|??|???|???|???|??|???|???|???|???|???)/g, 'e');
    str = str.replace(/(??|??|???|???|??)/g, 'i');
    str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???)/g, 'o');
    str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???)/g, 'u');
    str = str.replace(/(???|??|???|???|???)/g, 'y');
    str = str.replace(/(??)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}