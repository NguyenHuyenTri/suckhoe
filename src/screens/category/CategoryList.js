import React from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { theme } from '../../core/theme';

const data = [
    {
        id: '1',
        title: 'Bài phát thanh tuyên truyền 5K trong phòng chống dịch bệnh Covid-19.',
        summary: 'Thưa bà con và các bạn! Trong những ngày vừa qua, nước ta đã ghi nhận nhiều ca dương tính trong cộng đồng do biến thể mới của vi rút SARS-CoV-2 tại Hải Dương, Quảng Ninh, Hải Phòng, Bắc Ninh và Hà Nội. Đây là trường hợp lây nhiễm cộng đồng lớn nhất từ trước đến nay, có nguy cơ lây lan nhanh trên diện rộng.',
        avatar_url: 'http://soyte.hatinh.gov.vn/upload/1000030/fck/files/to_roi_thong_diep_5K_aa707.jpg',
        content: 'Thưa bà con và các bạn!Trong những ngày vừa qua, nước ta đã ghi nhận nhiều ca dương tính trong cộng đồng do biến thể mới của vi rút SARS-CoV-2 tại Hải Dương, Quảng Ninh, Hải Phòng, Bắc Ninh và Hà Nội. Đây là trường hợp lây nhiễm cộng đồng lớn nhất từ trước đến nay, có nguy cơ lây lan nhanh trên diện rộng.' +
            'Để chủ động phòng chống Covid-19 người dân cần đề cao cảnh giác, không hoang mang với dịch bệnh, tuân thủ nghiêm ngặt các khuyến cáo của bộ Y tế:' +
            '1. KHẨU TRANG: Đeo khẩu trang vải thường xuyên tại nơi công cộng, nơi tập trung đông người; đeo khẩu trang y tế tại các cơ sở y tế, khu cách ly.' +

            '2. KHỬ KHUẨN: Rửa tay thường xuyên bằng xà phòng hoặc dung dịch sát khuẩn tay. Vệ sinh các bề mặt/ vật dụng thường xuyên tiếp xúc (tay nắm cửa, điện thoại, máy tính bảng, mặt bàn, ghế…). Giữ vệ sinh, lau rửa và để nhà cửa thông thoáng.' +

            '3. KHOẢNG CÁCH: Giữ khoảng cách khi tiếp xúc với người khác.' +

            '4. KHÔNG TỤ TẬP đông người.' +

            '5. KHAI BÁO Y TẾ: thực hiện khai báo y tế cho cán bộ trạm y tế, trên App NCOVI; cài đặt ứng dụng BlueZone tại địa chỉ https://www.bluezone.gov.vn để được tư vấn, hỗ trợ và cảnh báo nguy cơ lây nhiễm COVID-19.' +

            'Khi có dấu hiệu sốt, ho, khó thở hãy gọi điện cho đường dây nóng của Bộ Y tế 19009095 hoặc đường dây nóng của sở Y tế Hà Tĩnh 0965341616, Trung tâm Kiểm soát bệnh tật 0961202026, bệnh viện Đa khoa tỉnh 0912303177 hoặc 0913294205 để được tư vấn, hỗ trợ, hướng dẫn đi khám bệnh đảm bảo an toàn.' +

            'Hãy thực hiện "5K: Khẩu trang – Khử khuẩn – Khoảng cách – Không tập trung – Khai báo y tế" để giữ an toàn cho Bạn và Chúng ta trước đại dịch COVID-19!' +

            'TRUNG TÂM KIỂM SOÁT BỆNH TẬT HÀ TĨNH ',
    },
    {
        id: '1',
        title: 'Bài phát thanh tuyên truyền 5K trong phòng chống dịch bệnh Covid-19.',
        summary: 'Thưa bà con và các bạn! Trong những ngày vừa qua, nước ta đã ghi nhận nhiều ca dương tính trong cộng đồng do biến thể mới của vi rút SARS-CoV-2 tại Hải Dương, Quảng Ninh, Hải Phòng, Bắc Ninh và Hà Nội. Đây là trường hợp lây nhiễm cộng đồng lớn nhất từ trước đến nay, có nguy cơ lây lan nhanh trên diện rộng.',
        name: 'Chris Jackson',
        avatar_url: 'https://cdn.tgdd.vn/Files/2020/05/30/1259576/tat-tan-tat-ve-trung-cach-chon-trung-tuoi-ngon-c-760x367.jpg',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget semper lectus. Morbi non laoreet lectus, a varius dolor.'
    },
    {
        id: '1',
        summary: 'Thưa bà con và các bạn! Trong những ngày vừa qua, nước ta đã ghi nhận nhiều ca dương tính trong cộng đồng do biến thể mới của vi rút SARS-CoV-2 tại Hải Dương, Quảng Ninh, Hải Phòng, Bắc Ninh và Hà Nội. Đây là trường hợp lây nhiễm cộng đồng lớn nhất từ trước đến nay, có nguy cơ lây lan nhanh trên diện rộng.',
        title: 'Bài phát thanh tuyên truyền 5K trong phòng chống dịch bệnh Covid-19.',
        name: 'Chris Jackson',
        avatar_url: 'https://cdn.tgdd.vn/Files/2020/05/30/1259576/tat-tan-tat-ve-trung-cach-chon-trung-tuoi-ngon-c-760x367.jpg',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget semper lectus. Morbi non laoreet lectus, a varius dolor.'
    },
    {
        id: '1',
        summary: 'Thưa bà con và các bạn! Trong những ngày vừa qua, nước ta đã ghi nhận nhiều ca dương tính trong cộng đồng do biến thể mới của vi rút SARS-CoV-2 tại Hải Dương, Quảng Ninh, Hải Phòng, Bắc Ninh và Hà Nội. Đây là trường hợp lây nhiễm cộng đồng lớn nhất từ trước đến nay, có nguy cơ lây lan nhanh trên diện rộng.',
        title: 'Bài phát thanh tuyên truyền 5K trong phòng chống dịch bệnh Covid-19.',
        name: 'Chris Jackson',
        avatar_url: 'https://cdn.tgdd.vn/Files/2020/05/30/1259576/tat-tan-tat-ve-trung-cach-chon-trung-tuoi-ngon-c-760x367.jpg',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget semper lectus. Morbi non laoreet lectus, a varius dolor.'
    },
]

function CategoryNewsScreen({ navigation }) {
    return (
        <>
            <View style={styles.root}>
                <FlatList data={data} style={styles.viewNews}
                    keyExtractor={(item, index) => index.toString()}
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
                                onPress={() => navigation.navigate('CategoryNewScreen')}
                            ><Text style={{ color: 'white' }}>Xem thêm</Text></TouchableOpacity>
                        </View>
                    }
                />
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