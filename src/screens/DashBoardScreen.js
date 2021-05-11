import React, { memo } from 'react';
import {
    StyleSheet,
    View,
} from "react-native";
import { Appbar, Paragraph, Button } from 'react-native-paper';
import { HomeCovidScreen } from '../screens/export'
import {theme} from '../core/theme'

const image = { uri: "https://reactjs.org/logo-og.png" };
const Dashboard = ({ navigation }) => (
    <View style={styles.root}>
        <Appbar style={styles.text}>
            <Appbar.Action
                icon="menu"
                onPress={() => navigation.openDrawer()}
            />
            <Appbar.Content title="DEBUG FC" />
        </Appbar>
        {/* <View style={styles.text}>
            <Paragraph style={styles.textHeader}>Viêm đường hô hấp Covid-19</Paragraph>
        </View> */}
        <HomeCovidScreen/>
    </View>

);

const styles = StyleSheet.create({
 
    top: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    root: {
        flex: 1,
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        backgroundColor:theme.colors.appbar

    },
    textHeader: {
        fontWeight: "bold",
        fontFamily: "Cochin",
        fontSize: 17,
    },
});



export default memo(Dashboard);
