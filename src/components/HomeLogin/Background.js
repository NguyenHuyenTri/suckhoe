import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import StatusBars from '../StatusBar/StatusBar';
import {theme} from '../../core/theme'
type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
    <View
        style={styles.background}
    >
      <StatusBars/>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </View>
);



const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor:'white',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
