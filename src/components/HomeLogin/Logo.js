import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  // <Image source={require('../../assets/logosuckhoer.png')} style={styles.image} />
  <Image source={require('../../assets/appsuckhoe.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

export default memo(Logo);
