import React from 'react';
import { StyleSheet,} from 'react-native';
import { Header } from 'react-native-elements';
import {theme} from '../../core/theme'
const Headers = (props) => {
    return (
        <Header
            placement="center"
            barStyle="light-content"
            leftComponent={{ icon: 'menu', color: theme.colors.activeColor, onPress: () => props.navigation.openDrawer(), }}
            centerComponent={{text: 'Đông Á', style:{...styles.headerTitle}}}
            containerStyle={styles.headerContainer}
            leftContainerStyle={{
                alignContent:'center',
            }}
            elevated='false'
        />
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: theme.colors.appbar,
        height: 60,
        borderBottomColor:theme.colors.backGround,
    },
    headerTitle: {
        fontFamily: 'HelveticaNeue',
        color: theme.colors.activeColor,
        fontSize: 18,
       
    },
});

export default Headers;