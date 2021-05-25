import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../core/theme'
const Icons = (props) => {

     return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.bgColor}]} 
        onPress={()=>props.navigation.navigate(`${props.navigate}`)}>
                <Icon name={props.name} size={30} color={props.color} />
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '40%',
        height: '96%',
        marginVertical: '3%',
        marginHorizontal:'1%',
        marginRight: '3%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:theme.colors.backGround,
        elevation:2,
    },
    text: {
        marginTop:5,
        fontSize: 16,
        fontFamily: 'HelveticaNeue',
        color:theme.colors.text,
        textAlign:'center'
    }
});

export default Icons;