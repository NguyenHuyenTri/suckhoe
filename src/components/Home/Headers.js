import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { theme } from '../../core/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

const Headers = (props) => {

    const openToggle = () => {
        props.navigation.toggleDrawer();
    }

    return (
        <Header
            placement="center"
            barStyle="light-content"
            leftComponent={<TouchableOpacity onPress={openToggle}><Icon name='bars' size={20} color={theme.colors.activeColor} /></TouchableOpacity>}
            centerComponent={<CustomHeader />}
            containerStyle={styles.headerContainer}
            leftContainerStyle={{
                alignContent: 'center', justifyContent: 'center', marginLeft: 10,
            }}
            rightContainerStyle={{
                alignContent: 'center', justifyContent: 'center'
            }}

            elevated='false'
        />
    );
};

const CustomHeader = () => {
    return (
        <View style={{ alignItems: 'center', alignContent: 'center', flexDirection: 'row' }}>
            <Image style={{ height: 30, width: 30 }} source={require('../../assets/appsuckhoe.png')} />
            <Text style={styles.headerTitle}>Sức khỏe</Text>
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
        marginLeft: 10
    },
});

export default Headers;