import React from 'react'
import {StyleSheet,View,ActivityIndicator} from 'react-native'
import {theme} from '../../core/theme'
export default function Loading() {
    return (
        <View style={[load.container, load.horizontal]}>
            <ActivityIndicator size="large" color={theme.colors.appbar} />
        </View>
    )
}

const load = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});