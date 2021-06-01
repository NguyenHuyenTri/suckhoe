import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { theme } from '../../core/theme';

export const DotBold = () => {
     return (
        <View style={styles.dotBold}></View>
    );
};

export const DotLight = () => {
    return (
        <View opacity={0.4} style={styles.dotLight}></View>
    )
}

const styles = StyleSheet.create({
    dotBold: {
        width: Dimensions.get('window').width * 0.04,
        height: Dimensions.get('window').width * 0.04,
        borderRadius: Dimensions.get('window').width * 0.04 / 2,
        backgroundColor: theme.colors.appbar,
        marginHorizontal: '2%'
    },
    dotLight: {
        width: Dimensions.get('window').width * 0.03,
        height: Dimensions.get('window').width * 0.03,
        borderRadius: Dimensions.get('window').width * 0.03 / 2,
        backgroundColor: theme.colors.appbar,
        marginHorizontal: '2%',
        marginVertical: '0.5%'
    }
});

