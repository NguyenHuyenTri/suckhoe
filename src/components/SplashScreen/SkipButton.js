import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { theme } from '../../core/theme';

const SkipButton = props => {
     return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Text style={styles.title}>{props.text}</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    container: {
        marginTop:10,
        backgroundColor: theme.colors.appbar,
        borderRadius: 50,
        paddingHorizontal:20,
        paddingVertical:10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
    }
});

export default SkipButton;