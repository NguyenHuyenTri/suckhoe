import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { theme } from '../../core/theme';
import Spinner  from 'react-native-spinkit';
export default function Loading() {
    return (
        <View style={load.container}>
            <Spinner  
                color={theme.colors.appbar}
                size={50}
                type={'9CubeGrid'}
                isVisible={true}    
            />
        </View>
    )
}

const load = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});