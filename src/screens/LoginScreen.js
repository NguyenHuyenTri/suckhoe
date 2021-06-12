import React, { useState, useEffect } from 'react';
import Background from '../components/HomeLogin/Background';
import Logo from '../components/HomeLogin/Logo';
import Header from '../components/HomeLogin/Header';
import { View, StyleSheet } from 'react-native';
import Button from '../components/HomeLogin/Button';
import { theme } from '../core/theme';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { GetAllSlideRequest } from '../reducer/Slides/SlideAction';
import { GetAllCategoryRequest } from '../reducer/Category/CategoryAction';
import { GetAllDiseaseRequest } from '../reducer/Disease/DiseaseAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import LoginSuccess from '../navigation/Home'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
GoogleSignin.configure({
    webClientId: '588042649592-14118evoktsdguilc0usso2nmmr1ocr9.apps.googleusercontent.com',
});
const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch();


    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [skip, setSkip] = useState(false)


    useEffect(() => {
        getAll();
    }, [navigation])
    function getAll() {
        AsyncStorage.getItem('@storage_Key').then((value) => {
            if (value != null) {
                setSkip(true);
                get();
            }
        }).catch((e) => {
            console.log(e);
        })
    }
    // Handle user state changes
    async function onAuthStateChanged(user) {

        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const get = () => {
        dispatch(GetAllSlideRequest());
        dispatch(GetAllCategoryRequest());
        dispatch(GetAllDiseaseRequest());
    }

    const login = async () => {
        console.log('click')
        await auth().signInAnonymously()
            .then(() => {
                console.log('Người dùng đã đăng nhập ẩn danh');
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Bật ẩn danh trong bảng điều khiển firebase của bạn.');
                }
                console.error(error);
            });
    }
    _signIn = async () => {
        GoogleSignin.hasPlayServices()
            .then(() => {
                GoogleSignin.signIn()
                    .then((user) => {
                        axios.post('https://trinh.toolgencode.com/public/api/users',user.user);
                        const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
                        return auth().signInWithCredential(googleCredential);
                    })
                    .catch((err) => {
                        if (err.code === 'CANCELED') {
                            console.log('glogin canceled', err.code);
                        }
                        else {
                            console.log('error', err);
                        }
                    });
            }).catch(err => {
                console.log('Play services error', err.code, err.message);
            });
    };


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;


    if (!user) {
        return (
            <>
                <Background>
                    <View style={styles.container}>
                        <Logo />
                        <Header>Đăng nhập để tiếp tục</Header>
                        <Button mode="contained" colors='#d50000' onPress={_signIn} icons={() => <Icon name='google' color='#d50000' size={20}/>} bgColor='#ef9a9a' >
                            Đăng nhập với Google
                        </Button>
                        <Button mode="contained"  onPress={login} icons={() => <Icon name='user-alt' color='#304ffe' size={15} />} colors='#304ffe' bgColor='#bbdefb'>
                            Đăng nhập với ẩn danh
                        </Button>
                    </View>
                </Background>

            </>
        );
    }
    if (user) {
        get();
        return (
            <LoginSuccess router={skip} />
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});
export default LoginScreen;
