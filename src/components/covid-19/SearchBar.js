import React from 'react'
import { StyleSheet, View ,Text } from 'react-native'
import { SearchBar, } from 'react-native-elements';
import { theme } from '../../core/theme'
const Search = (props) => {

    const { handleCancel ,handleChangeSearch } = props;
    const [state, setState] = React.useState('');

    const cancelText =(value) =>{
        setState(value)
        handleCancel();
    }
    const  changeText = (value) => {
        setState(value);
        handleChangeSearch(value);
    }

    return (
        <View keyboardShouldPersistTaps="handled">
            <SearchBar
                round
                onChangeText={(text) => changeText(text)}
                onClear={(text) => cancelText(text)}
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