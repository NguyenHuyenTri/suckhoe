import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, FlatList } from 'react-native';

export default ListCard = (props) => {

    const data =
        [
            { id: 1, description: "Bệnh sâu răng" },
            { id: 2, description: "Say nắng , say nóng" },
            { id: 3, description: "Nhức đầu và đau nữa đầu" },
            { id: 4, description: "Hen phế quản ở trẻ em" },
            { id: 5, description: "Ngạt mũi và sổ mũi" },
            { id: 6, description: "Bệnh cúm" },
            { id: 7, description: "Hen" },
            { id: 8, description: "Sởi" },
            { id: 9, description: "Bệnh tay chân miệng" },
            { id: 10, description: "Cảm cúm" },
            { id: 11, description: "Bệnh mùa" },
            { id: 12, description: "Đỏ mắt" },
            { id: 13, description: "Bệnh giun kim" },
            { id: 14, description: "Rối loạn trí nhớ" },
            { id: 15, description: "Nhiễm giun lương" },
            { id: 16, description: "Bệnh Lyme" },
            { id: 17, description: "Xơ cứng rải rác" },
            { id: 18, description: "Tiêu chảy do virut Rota" },
            { id: 19, description: "Nói lắp" },
            { id: 20, description: "Nấm họng" },
            { id: 21, description: "Viêm não Nhật Bản" },
            { id: 22, description: "Bệnh phổi kẽ" },
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
                            <TouchableOpacity style={styles.box} onPress={()=>props.navigation.navigate('Weather',{data:item.description})}>
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