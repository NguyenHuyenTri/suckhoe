import React, { useState, useEffect } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'
import { theme } from '../../core/theme';
import Loading from '../../components/body/Loading';
import {SafeAreaView } from 'react-native-safe-area-context';
import { useSelector,useDispatch } from "react-redux";
import { get as _get } from 'lodash';
import { GetAllCategoryRequest } from '../../reducer/Category/CategoryAction';

function CategoryNewsScreen({ navigation }) {

    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useDispatch();
    const category = useSelector((state) => _get(state, "category.categorys", []));

    const onRefresh = React.useCallback( async () => {
        setRefreshing(true);
        try {
            dispatch(GetAllCategoryRequest());
            setRefreshing(false)
        } catch (error) {
            setRefreshing(false);
            alert('Không có kết nối internet')
        }
    }, []);

    useEffect(() => {
        dispatch(GetAllCategoryRequest());
    }, [])

    return (
        <>
            <SafeAreaView style={styles.root}>
                {
                    category.length === 0 ? <Loading /> :
                
                            <FlatList data={category} style={styles.viewNews}
                                keyExtractor={(item) => {
                                    return item.id;
                                }}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                    />
                                }
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
                                            onPress={() => navigation.navigate('CategoryNewScreen', item)}
                                        ><Text style={{ color: 'white' }}>Xem thêm</Text></TouchableOpacity>
                                    </View>
                                }
                            />
                }
            </SafeAreaView>
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