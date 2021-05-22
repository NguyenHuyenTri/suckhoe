import React from 'react'
import { View } from 'react-native';
import ListCard from '../../components/weather/ListCard'

export default ListBody = (props) => {

    return <>
            <View style={{flex:1}}>
                    <ListCard navigation={props.navigation}/>
            </View>
        </>
}
