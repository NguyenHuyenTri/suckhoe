import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../core/theme';


const Drug = (props) => {

    const [data] =React.useState(props.route.params)

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.scrool}>
               
                <View style={styles.container}>
                <Image style={styles.image}
                    source={{
                        uri: data.url,
                    }}
                />
                </View>
                <View style={styles.viewNews}>
                    <Text style={styles.titleText}>{data.loai}</Text>
                    <Text style={styles.summaryText}>Loại: {data.ten}</Text>
                    <Text style={styles.summaryText}>Giá bán: {data.giaTien} VNĐ</Text>
                    <Text style={styles.tieudeText}>Đóng gói:</Text>
                    <Text style={styles.contentText}>{data.dongGoi}</Text>
                    <Text style={styles.tieudeText}>Thành phần:</Text>
                    <Text style={styles.contentText}>{data.thanhPhan}</Text>
                    <Text style={styles.tieudeText}>Công dụng:</Text>
                    <Text style={styles.contentText}>{data.chucNang}</Text>
                    <Text style={styles.tieudeText}>Đối tượng sử dụng:</Text>
                    <Text style={styles.contentText}>{data.lieuDung}</Text>
                    <Text style={styles.tieudeText}>Bảo quản:</Text>
                    <Text style={styles.contentText}>{data.baoQuan}</Text>
                    <Text style={styles.tieudeText}>Nhà sản xuất: </Text>
                    <Text style={styles.contentText}>{data.nhaSanXuat}</Text>
                    <Text style={styles.tieudeText}>Sản xuất tại:</Text>
                    <Text style={styles.contentText}>{data.xuatXu}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    scrool:{
        flex: 1,
    },
    container:{
        flexDirection: 'row',
  
        height:250,
    },
    viewNews: {
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: theme.colors.backGround,
    },
    image: {
        height: 250,
        width: 250,
        marginLeft:50
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10,
        fontFamily: 'HelveticaNeue',
        textAlign: 'justify',
        lineHeight: 25,
        backgroundColor: theme.colors.backGround,
    },

    summaryText: {
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "justify",
        color: '#484848',
        lineHeight: 20,
    },
    contentText: {
        paddingTop: "1%",
        paddingBottom: "2%",

    },
    tieudeText: {
        lineHeight: 20,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "justify",
    },
});
export default Drug
