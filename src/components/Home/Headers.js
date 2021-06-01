import React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';
import { Header } from 'react-native-elements';
import { theme } from '../../core/theme'
const Headers = (props) => {
    return (
        <Header
            placement="center"
            barStyle="light-content"
            centerComponent={<CustomHeader/>}
            containerStyle={styles.headerContainer}
            leftContainerStyle={{
                alignContent: 'center',
            }}
            elevated='false'
        />
    );
};

const CustomHeader = () => {
    return (
        <View style={{alignItems:'center',alignContent:'center',flexDirection:'row'}}>
                <Image style={{ height: 30, width: 30 }} source={require('../../assets/appsuckhoe.png')} />
                <Text style={styles.headerTitle}>Đông Á</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: theme.colors.appbar,
        height: 60,
        borderBottomColor: theme.colors.backGround,
    },
    headerTitle: {
        fontFamily: 'HelveticaNeue',
        color: theme.colors.activeColor,
        fontSize: 18,
        marginLeft:10
    },
});

export default Headers;