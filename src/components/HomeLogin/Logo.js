import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  // <Image source={require('../../assets/logosuckhoer.png')} style={styles.image} />
  <Image source={require('../../assets/app-suc-khoe-2.jpg')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    marginBottom: 12,
  },
});

export default memo(Logo);
