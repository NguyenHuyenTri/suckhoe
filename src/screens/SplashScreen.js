import React, { useEffect } from 'react';
import Background from '../components/HomeLogin/Background';
import Logo from '../components/HomeLogin/Logo';
import { GetAllSlideRequest } from '../reducer/Slides/SlideAction';
import { GetAllCategoryRequest } from '../reducer/Category/CategoryAction';
import { GetAllDiseaseRequest } from '../reducer/Disease/DiseaseAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch } from "react-redux";
const SpashScreen1 = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        getAllData();
    }, [props])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            if (jsonValue != null) {
                props.navigation.push('Home')
            } else {
                navigateToHome();
            }
        } catch (e) {
            // error reading value
        }
    }

    const getAllData = async () => {
        try {
            dispatch(GetAllSlideRequest());
            dispatch(GetAllCategoryRequest());
            dispatch(GetAllDiseaseRequest());
            getData();
        } catch (error) {
            alert('Không có kết nối internet')
        }
    }

    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(2000).then(() => props.navigation.push('Tips1'));
    };

    return (
        <Background>
            <Logo />
        </Background>
    )
}
export default SpashScreen1;
