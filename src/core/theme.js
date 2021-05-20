import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#55882E',
    secondary: '#146275',
    error: '#f13a59',
    colorButton:'#6495ed',
    appbar :'#FFFFFF',
    // appbar :'#F5AD47',
    // statusbar:'#039be5',
    statusbar:'#fff176',
    backGround:'#e0e0e0',
    text:'#212A45',
  },
  covid:{
    searchBackColor :"#eceff1",
    placeholderColor:'gray',
    fontColor :"black"
  },
  home:{
    gridview:'#FFFFFF',
    icon:'#F5AD47',
    textbottom:'#8F9AB3',
  }
};
