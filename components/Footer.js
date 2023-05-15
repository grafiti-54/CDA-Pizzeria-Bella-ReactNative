import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const windowWidth = Dimensions.get('window').width;

const Footer = () => {
  return (
    <View
      style={{
        height: 229,
      }}
    >
      <View
        style={{
          height: 80,
          flexDirection: "row", // aligne les icônes en ligne
          backgroundColor: "black", // fond noir
          justifyContent: "space-around", // distribue les icônes également dans le conteneur
          alignItems: "center", // centre les icônes verticalement
          paddingVertical: 14, // padding vertical pour doubler la hauteur du conteneur
        }}
      >
        <FontAwesome name="snapchat-ghost" size={24} color="#FFFC00" />
        <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        <FontAwesome name="youtube-play" size={24} color="#FF0000" />
        <FontAwesome name="facebook-f" size={24} color="#1877F2" />
        <FontAwesome name="instagram" size={24} color="#C13584" />
        <FontAwesome5 name="tiktok" size={24} color="white" />
      </View>
      <View
        style={{
          height: 150,
          backgroundColor: "#2C2C2C",
          marginTop: -1,
          alignItems: "stretch",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={styles.box}>
          <Text style={styles.h6}>LIENS UTILES</Text>
          <Text style={styles.mb}>Mentions légales</Text>
          <Text style={styles.mb}>Politique de cookies</Text>
          <Text style={styles.mb}>Politique de données</Text>
          <Text style={styles.mb}>Conditions générales</Text>
          <Text style={styles.mbLast}>Copyright</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.h6}>HORAIRES D'OUVERTURE</Text>
          <Text style={styles.mb}>Du dimanche au jeudi</Text>
          <Text style={styles.mb}>De 11h à 14h et de 18h à 23h</Text>
          <Text style={styles.mb}>Et du vendredi au samedi</Text>
          <Text style={styles.mbLast}>De 18h à 00h</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  
  box: {
    width: '50%',
    alignItems: 'center',
    marginBottom: windowWidth > 600 ? 0 : 20,
  },
  h6: {
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
    color:"white",
  },
  mb: {
    marginBottom: 1,
    color: 'gray',
  },
  mbLast: {
    marginBottom: 3,
    color: 'gray',
  },
});
