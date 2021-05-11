import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import NextButton from '../../components/SplashScreen/NextButton';
import {DotBold, DotLight} from '../../components/SplashScreen/DotSlider';

const Tips2 = props => {
    const push = () =>{
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Tips3' }],
          });
    }
     return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/screen/img/wear_mask.png')} style={styles.image} resizeMode="stretch" 
                />
            </View>
            <Text style={styles.textBody}>Đeo khẩu trang nơi công cộng, trên phương tiện giao thông công cộng</Text>
            <NextButton onClick={push}>Tiếp theo</NextButton>
            <View style={{flexDirection: 'row'}}>
                <DotLight />
                <DotBold />
                <DotLight />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    imageContainer: {
        width: '50%',
        height: '35%',
        marginVertical: '5%',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textTitle: {
        fontSize: 36,
        fontFamily: 'HelveticaNeue-Bold'
    },
    textBody: {
        width: '75%',
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        marginVertical: '5%',
        textAlign: 'center'
    }
});

export default Tips2;