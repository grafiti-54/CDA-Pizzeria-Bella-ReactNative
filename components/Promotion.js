import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import pizzaMardi from "../assets/pizza-mardi.png";
import pizzaVendredi from "../assets/pizza-vendredi.png";

const Promotion = () => {
  return (
    <View style={styles.container}>
      {/* Promtion 1 mardi*/}

      <View style={styles.promotionBox}>
      <Image source={pizzaMardi} style={[styles.image, {top: 180, left: 120}]} />
          <Text style={[styles.text, styles.title]}>Promotion</Text>
          <Text style={[styles.text, styles.subtitle]}>Les Mardis</Text>
          <Text style={[styles.text, styles.accroche]}>
            NE MANQUEZ PAS NOTRE PROMOTION PIZZA À MOITIÉ PRIX !
          </Text>
          <Text style={[styles.text, styles.price]}>7.00€</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>COMMANDER</Text>
          </TouchableOpacity>
      </View>

      {/* Promtion 2 vendredi*/}

      <View style={[styles.promotionBox, styles.promotionBoxSecond]}>
      <Image source={pizzaVendredi} style={[styles.image, {top: 50, left: 170, height:300}]} />
          <Text style={[styles.text, styles.title]}>Promotion</Text>
          <Text style={[styles.text, styles.subtitle]}>Les Vendredis</Text>
          <Text style={[styles.text, styles.accroche]}>
            3 PIZZAS MAXI ACHETÉES
          </Text>
          <Text style={[styles.text, styles.price]}>LA 3ÈME À 3.00€*</Text>
          <Text style={[styles.text, styles.accroche]}>
            *la moins chère des trois
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>COMMANDER</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Container principal
  container: {
    height: 700,
  },
  image: {
    position: "absolute",
    overflow: "hidden",
  },
  //1ere promotion
  promotionBox: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#00A149",
    height: "50%",
    width: "100%",
    position: "relative",
  },
  //2eme promotion
  promotionBoxSecond: {
    backgroundColor: "#D50000",
  },
  content: {
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Paprika",
  },
  subtitle: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  accroche: {
    width: "70%",
    marginLeft: "10%",
    color: "#c9c9c9",
  },
  price: {
    fontSize: 30,
    color: "#FFEB3B",
    marginLeft: "10%",
    fontFamily: "Avenir-Next",
    fontWeight: "bold",
  },
  //container du bouton
  button: {
    padding: 13,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    width: "40%",
    alignItems: "center",
    marginLeft: "13%",
    marginBottom: "10%",
    // marginLeft:"auto",
    // marginRight:"auto",
  },
  buttonText: {
    fontFamily: "Yanone-Kaff",
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Promotion;
