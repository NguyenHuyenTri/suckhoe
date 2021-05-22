import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../core/theme';

const data = {
    id: 1,
    loai: 'GIẢM ĐAU, HẠ SỐT',
    ten: 'Paradon',
    url: 'https://image.pharmacity.vn/live/uploads/2019/04/P00007_1_l-300x300.jpg',
    chucNang: `   Thuốc giảm đau, hạ sốt Panadol 500mg vỉ xanh dương có thành phần là Paracetamol 500mg,được dùng để hạ sốt, giảm đau từ nhẹ đến vừa bao gồm:
    Đau đầu, đau nửa đầu, đau cơ,đau bụng kinh, đau cơ xương khớp, đau sau khi tiêm Vacxin, đau răng hoặc sau các thủ thuật nha khoa.`,//title
    giaTien: '110,000',
    chiDinh: 'Chống chỉ định Paracetamol cho những bệnh nhân có tiền sử quá mẫn cảm với Paracetamol hoặc bất với kỳ tá dược nào của thuốc.',
    lieuDung: `a. Người lớn (kể cả người cao tuổi) và trẻ em từ 12 tuổi trở lên:
    + Dùng 500mg đến 1g paracetamol (1–2 viên/lần), sau mỗi 4–6 giờ nếu cần.
    + Chỉ dùng đường uống.
    + Liều tối đa hàng ngày: 4000mg (8 viên).
    + Không dùng quá liều chỉ định.
    + Không dùng với các thuốc khác có chứa paracetamol.
    + Khoảng cách liều tối thiểu: 4 giờ.
    b. Trẻ em từ 6 đến 11 tuổi:
    + Dùng 250 – 500mg sau mỗi 4 đến 6 giờ nếu cần.
    + Liều tối đa hàng ngày: 60mg/kg cân nặng chia thành nhiều lần, mỗi lần 10 – 15mg/kg cân nặng dùng trong 24 giờ.
    + Không dùng quá liều chỉ định.
    + Không dùng với các thuốc khác có chứa paracetamol.
    + Không dùng quá 4 liều trong 24 giờ.
    + Khoảng cách liều tối thiểu: 4 giờ.
    + Thời gian tối đa dùng thuốc không có tư vấn của bác sĩ: 3 ngày.
    c. Trẻ em dưới 6 tuổi: Không khuyến cáo dùng thuốc cho trẻ em dưới 6 tuổi.
    Thận trọng:
    + Những bệnh nhân được chẩn đoán là suy gan hoặc suy thận nên tham khảo ý kiến bác sĩ trước khi dùng Paracetamol`,
    baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
    thongtin: {
        thanhphan: '-Paracetamol 500mg, tá dược vừa đủ 1 viên',
        donggoi: 'Hộp 10 vỉ x 12 viên',
        xuatxu: '-Anh',
        nhaSx: '-GlaxoSmithKline',
    },
}

const Drug = () => {

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
                    <Text style={styles.contentText}>{data.thongtin.donggoi}</Text>
                    <Text style={styles.tieudeText}>Thành phần:</Text>
                    <Text style={styles.contentText}>{data.thongtin.thanhphan}</Text>
                    <Text style={styles.tieudeText}>Công dụng:</Text>
                    <Text style={styles.contentText}>{data.chucNang}</Text>
                    <Text style={styles.tieudeText}>Đối tượng sử dụng:</Text>
                    <Text style={styles.contentText}>{data.lieuDung}</Text>
                    <Text style={styles.tieudeText}>Bảo quản:</Text>
                    <Text style={styles.contentText}>{data.baoquan}</Text>
                    <Text style={styles.tieudeText}>Nhà sản xuất: </Text>
                    <Text style={styles.contentText}>{data.thongtin.nhaSx}</Text>
                    <Text style={styles.tieudeText}>Sản xuất tại:</Text>
                    <Text style={styles.contentText}>{data.thongtin.xuatxu}</Text>
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
