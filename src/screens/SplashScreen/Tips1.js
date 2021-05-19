import React from 'react';
import {View, StyleSheet, Text, Image,SafeAreaView} from 'react-native';

import NextButton from '../../components/SplashScreen/NextButton';
import {DotBold, DotLight} from '../../components/SplashScreen/DotSlider';
import StatusBar from '../../components/StatusBar/StatusBar';
const Tips1 = props => {

    const push = () =>{
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Tips2' }],
          });
    }
   
     return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/screen/img/wash_hand.png')} style={styles.image} resizeMode="stretch" 
                />
            </View>
            <Text style={styles.textBody}>Thường xuyên rửa tay đúng cách bằng xà phòng dưới vòi nước sạch, hoặc bằng dung dịch sát khuẩn có cồn (ít nhất 60% cồn)</Text>
            <NextButton onClick={push} >Tiếp theo</NextButton>
            <View style={{flexDirection: 'row'}}>
                <DotBold />
                <DotLight />
                <DotLight />
            </View>
        </SafeAreaView>
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

export default Tips1;