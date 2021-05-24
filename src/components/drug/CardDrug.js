import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity,  } from 'react-native'
import { theme } from '../../core/theme';

export default DrugCard = (props) => {

    if(props.data===null){
        return null;
    }
    
    return (
        <>  
                <View style={styles.root}>
                <FlatList
                    style={styles.boxList}
                    data={props.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <TouchableOpacity style={styles.box}
                                    onPress={() => props.navigation.navigate('DrugDetailsScreen',item)}
                                >
                                    <Image style={styles.image}
                                        source={{ uri: item.url }} />
                                    <View style={{ width: '80%' }}>
                                        <Text style={styles.name}>{item.ten}</Text>
                                        <Text style={styles.category}>{item.loai}</Text>
                                    </View>
                                </TouchableOpacity>
                                {
                                    item.id === props.data.length ?
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
    boxList: {
        paddingTop:10,
        paddingHorizontal:10,
        paddingBottom:30,
    },
    box: {
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