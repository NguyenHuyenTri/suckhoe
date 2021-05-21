import React from 'react';
import { Text } from 'react-native'



const data = {
    id: 1,
    loai: 'GIẢM ĐAU, HẠ SỐT',
    ten: 'Paradon',
    url:'https://image.pharmacity.vn/live/uploads/2019/04/P00007_1_l-300x300.jpg',
    chucNang: `Thuốc giảm đau, hạ sốt Panadol 500mg vỉ xanh dương có thành phần là Paracetamol 500mg, 
    được dùng để hạ sốt, giảm đau từ nhẹ đến vừa bao gồm: Đau đầu, đau nửa đầu, đau cơ, 
    đau bụng kinh, đau cơ xương khớp, đau sau khi tiêm Vacxin, đau răng hoặc sau các thủ thuật nha khoa.`,//title
    giaTien:'110000',
    chiDinh:'Chống chỉ định Paracetamol cho những bệnh nhân có tiền sử quá mẫn cảm với Paracetamol hoặc bất với kỳ tá dược nào của thuốc.',
    lieuDung:`a. Người lớn (kể cả người cao tuổi) và trẻ em từ 12 tuổi trở lên:
    Dùng 500mg đến 1g paracetamol (1 – 2 viên/lần), sau mỗi 4 – 6 giờ nếu cần.
    Chỉ dùng đường uống.
    Liều tối đa hàng ngày: 4000mg (8 viên).
    Không dùng quá liều chỉ định.
    Không dùng với các thuốc khác có chứa paracetamol.
    Khoảng cách liều tối thiểu: 4 giờ.
    b. Trẻ em từ 6 đến 11 tuổi:
    Dùng 250 – 500mg sau mỗi 4 đến 6 giờ nếu cần.
    Liều tối đa hàng ngày: 60mg/kg cân nặng chia thành nhiều lần, mỗi lần 10 – 15mg/kg cân nặng dùng trong 24 giờ.
    Không dùng quá liều chỉ định.
    Không dùng với các thuốc khác có chứa paracetamol.
    Không dùng quá 4 liều trong 24 giờ.
    Khoảng cách liều tối thiểu: 4 giờ.
    Thời gian tối đa dùng thuốc không có tư vấn của bác sĩ: 3 ngày.
    c. Trẻ em dưới 6 tuổi: Không khuyến cáo dùng thuốc cho trẻ em dưới 6 tuổi.
    Thận trọng:
    Những bệnh nhân được chẩn đoán là suy gan hoặc suy thận nên tham khảo ý kiến bác sĩ trước khi dùng Paracetamol`,
    baoquan:'Bảo quản ở nhiệt độ không quá 30 độ C.',
    thongtin:{
        thanhphan:'Paracetamol 500mg, tá dược vừa đủ 1 viên',
        donggoi:'Hộp 10 vỉ x 12 viên',
        xuatxu:'Anh',
        nhaSx:'GlaxoSmithKline',
    },
}

const Drug = () => {

    return (
        <Text>
            Đây là trang chi tiết thuốc
        </Text>
    )
}

export default Drug