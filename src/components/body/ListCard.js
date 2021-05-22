import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, FlatList } from 'react-native';

export default ListCard = (props) => {

    const data =
        [
            { id: 1, description: "Thoát vị đĩa đệm" },
            { id: 2, description: "Viêm đường hô hấp cấp trên" },
            { id: 3, description: "Thoái hóa cột sống cổ" },
            { id: 4, description: "Gai cột sống" },
            { id: 5, description: "Viêm Amidan" },
            { id: 6, description: "Viêm  họng" },
            { id: 7, description: "Ho" },
            { id: 8, description: "Barret thực quản" },
            { id: 9, description: "Basedow" },
            { id: 10, description: "Đau nhức toàn thân" },
            { id: 11, description: "Suy cận giáp" },
        ]

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
                            <TouchableOpacity style={styles.box} onPress={()=>props.navigation.navigate('Body',{data:item.description})}>
                                <View style={styles.boxImage}>
                                    <Image style={styles.image} source={require('../../assets/screen/body/chuthapdo.png')}
                                    />
                                </View>
                                <Text style={styles.text}>
                                    {item.description}
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