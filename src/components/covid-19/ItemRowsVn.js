import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { theme } from '../../core/theme';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ItemRowsVN = ({ item }) => {
    return (
       
            <View style={styles.rows}>
                <View style={{ width: '50%',justifyContent:'center',marginLeft:5  }}>
                    <Text style={styles.countryName}>{item.name}</Text>
                </View>
                <View style={{ width: '15%',justifyContent:'center',alignItems:'center'  }}>
                    <Text style={[styles.totalCases,{color: '#E35757' }]}>
                        {item.cases}</Text>
                </View>
                <View style={{ width: '20%',justifyContent:'center' ,alignItems:'center' }}>
                    <Text style={[styles.totalCases, { marginRight: 5,color: '#6AB276' }]}>{item.recovered}</Text>
                </View>
                <View style={{ width: '15%',justifyContent:'center',alignItems:'center'  }}>
                    <Text style={[styles.totalCases, { marginRight: 5,color: '#BDBDBD' }]}>{item.deaths}</Text>
                </View>
            </View>

    );
}

const styles = StyleSheet.create({
    rows: {
        flexDirection: 'row',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderBottomColor: theme.colors.backGround,
        borderWidth: 2,
        paddingBottom:15,
        marginBottom:15,
        paddingTop:5,
    },
    countryName: {
        fontSize: 16,
        marginLeft: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    totalCases: {
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold',
        color: theme.colors.inActiveColor,
    },
    flag: {
        height: 30,
        width: 40,
        marginLeft: 10,
        padding: 5,
        borderWidth: 0.5,
        borderColor: '#BDBDBD',
    },
});

export default ItemRowsVN;