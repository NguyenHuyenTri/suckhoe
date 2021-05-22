import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { theme } from '../../core/theme';

export default ListBody = () => {

    const [expanded1, setExpanded1] = React.useState(true);
    const [expanded2, setExpanded2] = React.useState(true);
    const [expanded3, setExpanded3] = React.useState(true);
    const [expanded4, setExpanded4] = React.useState(true);
    const [expanded5, setExpanded5] = React.useState(true);
    const [expanded6, setExpanded6] = React.useState(true);
    const [expanded7, setExpanded7] = React.useState(true);

    const handlePress1 = () => setExpanded1(!expanded1);
    const handlePress2 = () => setExpanded2(!expanded2);
    const handlePress3 = () => setExpanded3(!expanded3);
    const handlePress4 = () => setExpanded4(!expanded4);
    const handlePress5 = () => setExpanded5(!expanded5);
    const handlePress6 = () => setExpanded6(!expanded6);
    const handlePress7 = () => setExpanded7(!expanded7);


    const data = {
        id: 1,
        tongquan: `         Suy tuyến cận giáp là tình trạng tuyến cận giáp trạng không sản sinh đủ hormon tuyến cận giáp (viết tắt là PTH-parathyroid hormon)có tác dụng trong việc điều chỉnh lượng canxi và photpho trong xương và máu của cơ thể.
        Thiếu PTH dẫn đến tình trạng giảm canxi và tăng photpho trong máu. Sư mất cân bằng này có thể dẫn đến nhiều bệnh lý về xương, cơ, da, thần kinh.`
    }

    return <>
        <ScrollView>
            <List.Section style={styles.root}>
                <List.Accordion title="Tổng quan"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded1}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded1 ? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress1}>
                    <Text style={styles.contentText}>{data.tongquan}</Text>
                </List.Accordion>
                <List.Accordion title="Nguyên nhân"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded2}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded2? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress2}>
                    <Text style={styles.contentText}>{data.tongquan}</Text>
                </List.Accordion>
                <List.Accordion title="Yếu tố nguyên nhân"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded3}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded3? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress3}>
                    <Text style={styles.contentText}>{data.tongquan}</Text>
                </List.Accordion>
                <List.Accordion title="Triệu chứng"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded4}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded4 ? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress4}>
                    <Text style={styles.contentText}>{data.tongquan}</Text>
                </List.Accordion>
                <List.Accordion title="Chuẩn đoán"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded5}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded5 ? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress5}>
                    <Text style={styles.contentText}>{data.tongquan}</Text>
                </List.Accordion>
                <List.Accordion title="Phòng ngừa"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded6}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded6 ? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress6}>
                    <Text style={styles.contentText}>{data.tongquan}</Text>
                </List.Accordion>
                <List.Accordion title="Điều trị và chăm sóc"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded7}
                    right={() => <List.Icon color={'white'} style={{ height: 20 ,width:30}} icon={expanded7 ? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress7}>
                    <Text style={styles.contentText}>{data.tongquan}</Text>
                </List.Accordion>
            </List.Section>
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    button: {
        backgroundColor: theme.colors.appbar,
        marginBottom: 10,
        padding: 0,
        height: 50,
        marginHorizontal:10,
    },
    text: {
        color: theme.colors.activeColor,
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft:10,
    },
    contentText: {
        paddingBottom: 10,
        paddingHorizontal:10,
        fontSize: 16,
        color: theme.colors.text,
    }
})