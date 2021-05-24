const drug = [
    {
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
    },
    {
        id: 2,
        loai: 'Thuốc kháng dị ứng',
        ten: 'Zyrtec',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P00624_1_l-300x300.jpg',
        chucNang: `   Điều trị các triệu chứng về mũi và mắt của viêm mũi dị ứng quanh năm theo mùa. Giảm triệu chứng của mề đay..`,//title
        giaTien: '76,500',
        chiDinh: 'Mẫn cảm với các thành phần của thuốc.',
        lieuDung: `Người lớn, trẻ trên 12 tuổi: 1 viên/ngày.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: '-Cetirizine dihydrochloride 10mg, tá dược vừa đủ 1 viên.',
            donggoi: 'Hộp 1 vỉ x 10 viên',
            xuatxu: '-Anh',
            nhaSx: '-UCB Farchim SA',
        },
    },
    {
        id: 3,
        loai: 'Thuốc kháng dị ứng',
        ten: 'Telfast HD 180mg',
        url: 'https://image.pharmacity.vn/live/uploads/2019/05/P00021_2-1-300x300.jpg',
        chucNang: `   Telfast HD 180mg là thuốc điều trị viêm mũi dị ứng và mề đay vô căn mạn tính.`,//title
        giaTien: '76,500',
        chiDinh: `Viêm mũi dị ứng.
                Mày đay vô căn mạn tính.`,
        lieuDung: `     Người lớn và trẻ em từ 12 tuổi trở lên: Liều khuyên dùng là 1 viên mỗi ngày.
    Người suy thận: Liều khởi đầu được khuyên dùng là 1 viên fexofenadin 60mg mỗi ngày
    Người suy gan: Không cần điều chỉnh liều.
    Người cao tuổi: Không cần điều chỉnh liều, ngoại trừ có suy giảm chức năng thận.
    Thuốc dùng đường uống với nước và trước bữa ăn. Không uống thuốc với nước hoa quả.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: '-Fexofenadin hydroclorid……………..180mg',
            donggoi: 'Hộp 1 vỉ x 10 viên',
            xuatxu: '-Pháp',
            nhaSx: '-Sanofi Aventis',
        },
    },
    {
        id: 4,
        loai: 'Dung dịch sát khuẩn',
        ten: 'Povidon Iod 10% (8ml)',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P00226_2_l-300x300.jpg',
        chucNang: `-Dung dịch sát khuẩn Povidine Povidon Iod 10% giúp sát trùng da trước khi phẫu thuật và khử trùng dụng cụ trước khi tiệt trùng.`,//title
        giaTien: '6,000',
        chiDinh: `Giúp sát trùng da trước khi phẫu thuật.
        Khử trùng dụng cụ trước khi tiệt trùng.`,
        lieuDung: `-Dùng nguyên chất bôi lên da, hoặc pha loãng với nước, hay dung dịch sinh lý (Nacl 0,9%) để tưới rửa vết thương.`,
        baoquan: '-Ở nhiệt độ không quá 30 độ C. Chỉ dùng 2 tháng sau khi mở nắp.',
        thongtin: {
            thanhphan: '-Povidone Iodine 0.8g, tá dược vừa đủ 8ml.',
            donggoi: 'Chai 8ml',
            xuatxu: '-Việt Nam',
            nhaSx: '-Pharmedic',
        },
    },
    {
        id: 5,
        loai: 'Thuốc da liễu',
        ten: 'Zyrtec',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P00821_1_l-300x300.jpg',
        chucNang: `- Điều trị các nhiễm vi nấm ngoài da như nhiễm nấm ở thân, nhiễm nấm ở bẹn, nhiễm nấm ở bàn tay, bàn chân do Trichophyton Rubrum, Trichophyton Mentaprophytes, Microsporum Canis và Epidermophyton Floccosum. Điều trị nhiễm vi nấm Candida ở da và lang ben.`,//title
        giaTien: '33,000',
        chiDinh: '-Sử dụng tại chỗ bôi ngoài da trong điều trị trong các nhiễm nấm ngoài da như nhiễm nấm ở thân, nhiễm nấm ở bẹn, nhiễm nấm ở bàn tay, bàn chân do Trichophyton rubrum, Trichophyton mentaprophytes, Microsporum canis và Epidermophyton Floccosum, cũng như điều trị nhiễm nấm Candida ở da và điều trị bệnh lang ben. Ngoài ra, còn chỉ định trong điều trị viêm da tiết bã – một bệnh lý da liên quan đến sự hiện diện nấm Malassezia furfur.',
        lieuDung: `Thoa thuốc ngày 1 lần tại các vùng bị nhiễm nấm và vùng da cận kề.
-Thời gian điều trị thông thường:
-Lang ben: 2 – 3 tuần.
-Nhiễm nấm men: 2 – 3 tuần.
-Nhiễm nấm ở bẹn: 2 – 4 tuần.
-Nhiễm nấm ở thân: 3 – 4 tuần.
-Nhiễm nấm ở bàn chân: 4 – 6 tuần.
-Viêm da tiết bã: 2 – 4 tuần. Điều trị duy trì bằng cách bôi thuốc 1 hoặc 2 lần mỗi ngày.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: '-Ketoconazol 20mg chứa trong mỗi gam.',
            donggoi: ' Tuýp 5g',
            xuatxu: '-Nhật Bản',
            nhaSx: '-Janssen',
        },
    },
    {
        id: 6,
        loai: 'Thuốc da liễu',
        ten: 'Natri Borat Denicol (15ml)',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P11085_1_l-300x300.jpg',
        chucNang: `-Dùng để trị đẹn (lưỡi trắng, tưa lưỡi), lở miệng, sưng lợi (sưng nướu).`,//title
        giaTien: '15,000',
        chiDinh: '-Dùng để trị đẹn (lưỡi trắng, tưa lưỡi), lở miệng, sưng lợi (sưng nướu).',
        lieuDung: `-Thoa lưỡi và miệng ngày 3 lần.Rơ miệng cho trẻ sơ sinh.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: '-Natri borat 3.87g, Vanillin 0.021g, Glycerin vừa đủ 15ml.',
            donggoi: 'Hộp 1 chai 15ml.',
            xuatxu: '-Việt Nam',
            nhaSx: '-Sagopha',
        },
    },
    {
        id: 7,
        loai: 'Thuốc kháng dị ứng',
        ten: 'Aerius Desloratadine',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P03119_1_l-300x300.jpg',
        chucNang: `-Aerius được chỉ định điều trị các triệu chứng viêm dị ứng như hắt hơi, sổ mũi, ngứa, chảy nước mắt, đỏ mắt… và làm giảm ngứa, giảm kích cỡ và số lượng ban của bệnh nổi mề đay.`,//title
        giaTien: '100,000',
        chiDinh: '-Thuốc điều trị các triệu chứng viêm dị ứng như hắt hơi, sổ mũi, ngứa, chảy nước mắt, đỏ mắt… và làm giảm ngứa, giảm kích cỡ và số lượng ban của bệnh nổi mề đay.',
        lieuDung: `Người lớn và thiếu niên 12 tuổi: Mỗi ngày uống 1 viên (5mg), dùng đường để uống.
-Trẻ em từ 6 – 11 tuổi: Mỗi ngày uống 1/2 viên (2.5mg).
-Trẻ em từ 1 – 5 tuổi: Mỗi ngày uống 1/4 viên (1.25mg).
-Trẻ từ 6 – 11 tháng tuổi: Mỗi ngày uống (1mg) viên.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: `-Hoạt chất: Mỗi viên nén Aerius màu xanh nhạt chứa 5mg Desloratadine.Tá dược: Dibasic Calcium Phosphate Dihydrate, tinh bột ngô, bột Talc…`,
            donggoi: 'Hộp 10 viên nén',
            xuatxu: '-Mỹ',
            nhaSx: '-Merck Sharp & Dohme',
        },
    },
    {
        id: 8,
        loai: 'Thuốc kháng dị ứng',
        ten: 'Zyrtec',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P01518_1_l-300x300.jpg',
        chucNang: `   Điều trị các triệu chứng về mũi và mắt của viêm mũi dị ứng quanh năm theo mùa. Giảm triệu chứng của mề đay..`,//title
        giaTien: '76,500',
        chiDinh: 'Mẫn cảm với các thành phần của thuốc.',
        lieuDung: `Người lớn, trẻ trên 12 tuổi: 1 viên/ngày.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: '-Cetirizine dihydrochloride 10mg, tá dược vừa đủ 1 viên.',
            donggoi: 'Hộp 1 vỉ x 10 viên',
            xuatxu: '-Anh',
            nhaSx: '-UCB Farchim SA',
        },
    },
    {
        id: 9,
        loai: 'Thuốc kháng dị ứng',
        ten: 'Zyrtec',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P00624_1_l-300x300.jpg',
        chucNang: `   Điều trị các triệu chứng về mũi và mắt của viêm mũi dị ứng quanh năm theo mùa. Giảm triệu chứng của mề đay..`,//title
        giaTien: '76,500',
        chiDinh: 'Mẫn cảm với các thành phần của thuốc.',
        lieuDung: `Người lớn, trẻ trên 12 tuổi: 1 viên/ngày.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: '-Cetirizine dihydrochloride 10mg, tá dược vừa đủ 1 viên.',
            donggoi: 'Hộp 1 vỉ x 10 viên',
            xuatxu: '-Anh',
            nhaSx: '-UCB Farchim SA',
        },
    },
    {
        id: 10,
        loai: 'Thuốc kháng dị ứng',
        ten: 'Zyrtec',
        url: 'https://image.pharmacity.vn/live/uploads/2019/04/P00624_1_l-300x300.jpg',
        chucNang: `   Điều trị các triệu chứng về mũi và mắt của viêm mũi dị ứng quanh năm theo mùa. Giảm triệu chứng của mề đay..`,//title
        giaTien: '76,500',
        chiDinh: 'Mẫn cảm với các thành phần của thuốc.',
        lieuDung: `Người lớn, trẻ trên 12 tuổi: 1 viên/ngày.`,
        baoquan: 'Bảo quản ở nhiệt độ không quá 30 độ C.',
        thongtin: {
            thanhphan: '-Cetirizine dihydrochloride 10mg, tá dược vừa đủ 1 viên.',
            donggoi: 'Hộp 1 vỉ x 10 viên',
            xuatxu: '-Anh',
            nhaSx: '-UCB Farchim SA',
        },
    },
    
]


export {drug};

