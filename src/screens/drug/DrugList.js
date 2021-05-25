import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
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
            tempData.map((item, index) => {
                if (to_slug(item.ten).indexOf(to_slug(value)) > -1) {
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
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}