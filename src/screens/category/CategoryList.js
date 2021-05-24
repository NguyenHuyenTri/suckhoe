import React, { useState, useEffect } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { theme } from '../../core/theme';
import Loading from '../../components/body/Loading'


function CategoryNewsScreen({ navigation }) {

    const [data, setData] = useState()
    const url = 'https://trinh.toolgencode.com/public/api/categories';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data === undefined) {
            fetchData();
        }
    }, [data === undefined])


    const fetchData = async () => {
        try {
            const result = await fetch(url);
            const response = await result.json();
            setData(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <>
            <View style={styles.root}>
                {
                    loading ? <Loading/> :
                        <FlatList data={data} style={styles.viewNews}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: "#DDDDDD", marginBottom: 10, marginTop: 5 }}>
                                    <Text style={styles.titleText}>{item.title}</Text>
                                    <Image style={styles.image}
                                        source={{
                                            uri: item.avatar_url,
                                        }}
                                    />
                                    <Text style={styles.summaryText}>{item.summary}</Text>
                                    <TouchableOpacity title="Xem Thêm." style={styles.button}
                                        onPress={() => navigation.navigate('CategoryNewScreen',item)}
                                    ><Text style={{ color: 'white' }}>Xem thêm</Text></TouchableOpacity>
                                </View>
                            }
                        />
                }
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
    },
    viewNews: {
        padding: 10
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        fontFamily: 'HelveticaNeue',
    },
    image: {
        maxWidth: '100%',
        height: 150,
    },
    summaryText: {
        fontStyle: "italic",
        textAlign: "justify",
        padding: 10,
        color: '#7C838D'
    },
    button: {
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: theme.home.icon,
        height: 40,
        alignItems: "center",
        justifyContent: 'center'
    }
});

export default CategoryNewsScreen;