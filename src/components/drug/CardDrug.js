import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { theme } from '../../core/theme';
export default DrugCard = (props) => {

    const data =
        [
            { id: 1, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P00007_1_l-300x300.jpg", description: "Panadol", category: "Điều trị" },
            { id: 2, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P00624_1_l-300x300.jpg", description: "Zyrtec (10mg)", category: "Thực thẩm chức năng" },
            { id: 3, icon: "https://image.pharmacity.vn/live/uploads/2019/05/P00021_2-1-300x300.jpg", description: "Telfast HD 180mg", category: "Da liễu" },
            { id: 4, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P00226_2_l-300x300.jpg", description: "Povidon Iod 10% (8ml)", category: "Da liễu" },
            { id: 5, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P00821_1_l-300x300.jpg", description: "Nizoral Cream (10g)", category: "Da liễu" },
            { id: 6, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P11085_1_l-300x300.jpg", description: "Natri Borat Denicol (15ml)", category: "Da liễu" },
            { id: 7, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P03119_1_l-300x300.jpg", description: "Aerius Desloratadine", category: "Da liễu" },
            { id: 8, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P01518_1_l-300x300.jpg", description: "Cetirizin 10mg", category: "Da liễu" },
            { id: 9, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P01518_1_l-300x300.jpg", description: "Cetirizin 10mg", category: "Da liễu" },
            { id: 10, icon: "https://image.pharmacity.vn/live/uploads/2019/04/P01518_1_l-300x300.jpg", description: "Cetirizin 10mg", category: "Thuốc ho" },
        ]

    return (
        <>
            <View style={styles.root}>
                <FlatList
                    style={styles.notificationList}
                    data={data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <TouchableOpacity style={styles.notificationBox}
                                    onPress={() => props.navigation.navigate('DrugDetailsScreen')}
                                >
                                    <Image style={styles.image}
                                        source={{ uri: item.icon }} />
                                    <View style={{ width: '80%' }}>
                                        <Text style={styles.name}>{item.description}</Text>
                                        <Text style={styles.category}>{item.category}</Text>
                                    </View>
                                </TouchableOpacity>
                                {
                                    item.id === data.length ?
                                        <View style={{ height: 20 }}>
                                        </View> : null
                                }

                            </>
                        )
                    }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    notificationList: {
        padding: 10,
    },
    notificationBox: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: theme.colors.backGround,
        flexDirection: 'row',
        borderRadius: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000000",
        marginLeft: 10,
    },
    category: {
        fontSize: 13,
        color: "#000000",
        marginLeft: 10,
    },
})