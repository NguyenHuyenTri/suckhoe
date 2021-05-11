import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Icons = (props) => {

    console.log(props.navigate)

     return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.bgColor}]} 
        onPress={()=>props.navigation.navigate(`${props.navigate}`)}>
            <View style={styles.iconWrapper}>
                <Icon name={props.name} size={24} color={props.color} />
            </View>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '40%',
        height: '96%',
        borderRadius: 20,
        marginVertical: '2%',
        marginRight: '2%',
    },
    iconWrapper: {
        width: '30%',
        height: '30%',
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginLeft: '10%',
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginLeft: '10%',
        marginVertical: '10%',
        fontSize: 20,
        fontFamily: 'HelveticaNeue'
    }
});

export default Icons;