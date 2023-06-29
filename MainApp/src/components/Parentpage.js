import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const Parentpage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <Ionic name="arrow-back" size={50} />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('MainApp/assets/images/Logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Parentpage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 25,
    marginTop: 20,
  },
  
  arrowContainer: {
    position: 'absolute',
    top:25,
    left:30,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 50,
  },
});