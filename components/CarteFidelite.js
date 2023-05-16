import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import carteFidelite from "../assets/Loyalty-1.png"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CarteFidelite = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={carteFidelite}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>Carte de fidélité disponible !</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginBottom: '5%',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
    height: windowHeight * 0.55,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    backgroundColor: '#8CA93E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Avenir-Next',
  },
});

export default CarteFidelite;
