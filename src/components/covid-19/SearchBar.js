import React from 'react'
import { StyleSheet, View ,Text } from 'react-native'
import { SearchBar, } from 'react-native-elements';
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
                containerStyle={{
                    backgroundColor:theme.colors.backGround
                }}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
  
})

export default Search;