import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


import NextButton from '../../components/SplashScreen/NextButton';
import {DotBold, DotLight} from '../../components/SplashScreen/DotSlider';

const Tips3 = props => {

    const push = () =>{
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
    }
     return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={require('../../assets/screen/img/use_tissue.png')} style={styles.image} resizeMode="stretch" 
                />
            </View>
            <Text style={styles.textBody}>Che miệng và mũi khi ho hoặc hắt hơi bằng khăn giấy, khăn vải, khuỷu tay áo.</Text>
            <NextButton onClick={push}>Bắt đầu</NextButton>
            <View style={{flexDirection: 'row'}}>
                <DotLight />
                <DotLight />
                <DotBold />
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

export default Tips3;