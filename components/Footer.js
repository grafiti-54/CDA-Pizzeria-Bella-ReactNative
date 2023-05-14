import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View
      style={{
        height: 100,
        flexDirection: "row", // aligne les icônes en ligne
        backgroundColor: "black", // fond noir
        justifyContent: "space-around", // distribue les icônes également dans le conteneur
        alignItems: "center", // centre les icônes verticalement
        paddingVertical: 24, // padding vertical pour doubler la hauteur du conteneur
      }}
    >
      <FontAwesome name="snapchat-ghost" size={24} color="#FFFC00" />
      <FontAwesome name="twitter" size={24} color="#1DA1F2" />
      <FontAwesome name="youtube-play" size={24} color="#FF0000" />
      <FontAwesome name="facebook-f" size={24} color="#1877F2" />
      <FontAwesome name="instagram" size={24} color="#C13584" />
      <FontAwesome5 name="tiktok" size={24} color="white" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
