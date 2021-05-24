import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { theme } from '../../core/theme';

export default ListBody = (props) => {

    const [expanded1, setExpanded1] = React.useState(true);
    const [expanded2, setExpanded2] = React.useState(true);

    const handlePress1 = () => setExpanded1(!expanded1);
    const handlePress2 = () => setExpanded2(!expanded2);

  
    return <>
        <ScrollView>
            <List.Section style={styles.root}>
                <List.Accordion title="Tổng quan"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded1}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded1 ? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress1}>
                    <Text style={styles.contentText}>{props.route.params.overview}</Text>
                </List.Accordion>
                <List.Accordion title="Điều trị"
                    style={styles.button}
                    titleStyle={styles.text}
                    expanded={expanded2}
                    right={() => <List.Icon color={'white'} style={{ height: 20 }} icon={expanded2? 'chevron-up' : 'chevron-down'} />}
                    onPress={handlePress2}>
                    <Text style={styles.contentText}>{props.route.params.treatment}</Text>
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