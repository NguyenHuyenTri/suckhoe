import React from 'react'
import { StyleSheet, View ,Text } from 'react-native'
import { SearchBar, } from 'react-native-elements';
import { Tab } from 'react-native-elements';
import { theme } from '../../core/theme'
const Search = () => {

    const [state, setState] = React.useState('');
    return (
        <View style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
            <SearchBar
                round
                lightTheme
                onChangeText={(text) => setState(text)}
                onClear={(text) => setState(text)}
                value={state}
                clearIcon={true}
                placeholder="Tìm kiếm..."
                platform="ios"
                cancelButtonTitle=''
                showCancel={true}
            />
            <View style={{flexDirection:'row',alignItems:'center',height:50}}>
                 <View style={{width:'50%',height:'100%',backgroundColor:theme.colors.appbar,justifyContent:'center'}}>
                     <Text style={{textAlign:'center',}}>Việt Nam</Text>
                 </View>
                 <View style={{width:'50%'}}>
                 <Text style={{textAlign:'center'}}>Thế Giới</Text>
                 </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        margin: 5,
        tintColor: 'rgb(242, 63, 52)',
        width: 40,
        height: 40,
    },
    container: {
        alignSelf: 'center',
        height: 30,
        flex: 1,
        margin: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: theme.covid.searchBackColor,
        flexDirection: 'row'
    },
    logo: {
        resizeMode: 'contain',
        tintColor: theme.covid.searchBackColor,
    },
    inputStyle: {
        flex: 1,
        padding: 0,
        color: theme.covid.fontColor
    },
})

export default Search;