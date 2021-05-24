import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../core/theme';


function NewsScreen(props) {
    const data =props.route.params;
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.viewNews}>
                <Image style={styles.image}
                    source={{
                        uri: data.avatar_url,
                    }}
                />
                <Text style={styles.titleText}>{data.title}</Text>
                <Text style={styles.summaryText}>{data.summary}</Text>
                <Text style={styles.contentText}>{data.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: theme.colors.backGround
    },
    viewNews: {
        paddingHorizontal: 10,
        flex: 1,
    },
    image: {
        paddingTop: 5,
        height: 200,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10,
        fontFamily: 'HelveticaNeue',
        textAlign: 'justify',
        lineHeight:25
    },

    summaryText: {
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "justify",
        color: '#484848',
        lineHeight: 20,
    },
    contentText: {
        paddingTop: "5%",
    },
});
export default NewsScreen;