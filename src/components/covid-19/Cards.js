import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Cards extends Component {
   
    render() {
        console.log(this.props.numbervn)
        return (
            <View style={{
                ...styles.container,
                backgroundColor: this.props.bg,
                borderRadius: 0,
                borderWidth: 1,
                borderColor: "#969696",
            }}>
                <View style={styles.col}>
                </View>
                <Text style={{ ...styles.title, color: this.props.color }}>{this.props.title}</Text>
                <Text styles={{
                    ...styles.number,
                    color: 'black',

                }}>
                   {this.props.number}
                </Text>
                <Text styles={{
                    ...styles.number,
                    color: 'black',
                }}>
                    {this.props.numbervn}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 140,
        padding: 15,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderRadius: 40,

    },
    col: {
        flexDirection: "row",
    },
    title: {
        color: '#b8b8aa',
        fontWeight: "bold",
        flexShrink: 12,
    },
    number: {
        fontWeight: "bold",
        fontSize: 17,
    }
})