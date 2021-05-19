import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from '../../core/theme';

 function StatusBars (){
    return (
        <StatusBar backgroundColor={theme.colors.statusbar}
        barStyle="dark-content" translucent={false} 
        showHideTransition="fade"
        />
    )
}

export default StatusBars;