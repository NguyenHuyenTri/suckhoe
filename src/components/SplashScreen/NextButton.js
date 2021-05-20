import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

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
        backgroundColor: '#F5AD47',
        borderRadius: 25,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        fontFamily: 'HelveticaNeue'
    }
});

export default Name;