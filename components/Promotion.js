import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import pizzaMardi from "../assets/pizza-mardi.png";
import pizzaVendredi from "../assets/pizza-vendredi.png";

const Promotion = () => {
  return (
    <View style={{ height: 700 }}>
    <View style={{ backgroundColor: "red", height: "50%", width: "100%" }}>
    </View>
    <View style={{ backgroundColor: "green", height: '50%', width: "100%" }}></View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  promotionBox: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00C853",
  },
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
    fontSize: 15,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,
    color: "#FFEB3B",
  },
  button: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Yanone-Kaff",
    color: "#000000",
  },
});

export default Promotion;

// <Text style={[styles.text, styles.title]}>Promotion</Text>
//         <Text style={[styles.text, styles.subtitle]}>Les Mardis</Text>
//         <Text style={styles.text}>
//           NE MANQUEZ PAS NOTRE PROMOTION PIZZA À MOITIÉ PRIX !
//         </Text>
//         <Text style={[styles.text, styles.price]}>7.00€</Text>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>COMMANDER</Text>
//         </TouchableOpacity>

{
  /* <Text style={[styles.text, styles.title]}>Promotion</Text>
        <Text style={[styles.text, styles.subtitle]}>Les Vendredis</Text>
        <Text style={styles.text}>3 PIZZAS MAXI ACHETÉES</Text>
        <Text style={[styles.text, styles.price]}>LA 3ÈME À 3.00€*</Text>
        <Text style={styles.text}>*la moins chère des trois</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>COMMANDER</Text>
        </TouchableOpacity> */
}
