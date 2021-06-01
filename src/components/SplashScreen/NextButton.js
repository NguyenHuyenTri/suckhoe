import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { theme } from '../../core/theme';

const Name = props => {
     return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Text style={styles.title}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '9%',
        backgroundColor: theme.colors.appbar,
        borderRadius: 30,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'HelveticaNeue'
    }
});

export default Name;