import React from 'react'
import { StyleSheet, View ,Text } from 'react-native'
import { SearchBar, } from 'react-native-elements';
import { theme } from '../../core/theme'
const Search = () => {

    const [state, setState] = React.useState('');
    return (
        <View keyboardShouldPersistTaps="handled">
            <SearchBar
                round
                onChangeText={(text) => setState(text)}
                onClear={(text) => setState(text)}
                value={state}
                clearIcon={true}
                placeholder="Tìm kiếm..."
                platform="ios"
                cancelButtonTitle=''
                showCancel={true}
                inputStyle={{
                    backgroundColor:theme.colors.activeColor,
                }}
                inputContainerStyle={{
                    backgroundColor:theme.colors.activeColor
                }}
                containerStyle={{
                    backgroundColor:theme.colors.activeColor,
                    height:50,
                    elevation:0,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  
})

export default Search;