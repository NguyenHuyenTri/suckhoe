import React,{useEffect,useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, FlatList } from 'react-native';
export default ListCard = (props) => {
    const {data} = props;
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <>
            <View style={styles.root}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.box} onPress={()=>props.navigation.navigate('Body',item)}>
                                <View style={styles.boxImage}>
                                    <Image style={styles.image} source={require('../../assets/screen/body/chuthapdo.png')}
                                    />
                                </View>
                                <Text style={styles.text}>
                                    {item.discriptions}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    box: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderBottomColor: '#F7F7F7',
        borderBottomWidth: 3,
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 10,
        padding: 10,
    },
    boxImage: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        borderRadius: 50,
        borderColor: '#CC0000',
        borderWidth: 2,
    },
    text: {
        width: '80%',
        paddingLeft: 20,
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue',
    }
})