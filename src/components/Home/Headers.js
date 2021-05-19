import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import {theme} from '../../core/theme'
const Headers = (props) => {
    return (
        <Header
            placement="left"
            barStyle="light-content"
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => props.navigation.openDrawer(), }}
            centerComponent={{text: 'ĐÔNG Á', style:{...styles.headerTitle}}}
            containerStyle={styles.headerContainer}
        />
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: theme.colors.appbar,
        height: '10%',
        
    },
    headerTitle: {
        fontFamily: 'HelveticaNeue',
        color: '#FFFFFF',
        fontSize: 20,
    },
});

export default Headers;