import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

const Button = ({ mode, bgColor, style, icons, colors, children, ...props }: Props) => (
  <PaperButton
    style={
      {
        backgroundColor: bgColor, width: '100%',
        marginVertical: 10,height:50,justifyContent:'center'
      }
    }
    labelStyle={[styles.text,{color: colors}]}
    mode={mode}
    {...props}
    icon={icons}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default memo(Button);
