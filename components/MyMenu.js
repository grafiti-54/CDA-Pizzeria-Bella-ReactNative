import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { pizzas } from "../data.js";

const MyMenu = () => {
  const [selectedBase, setSelectedBase] = useState("Tomate");

  const filterPizzas = () => {
    if (selectedBase === "all") {
      return pizzas;
    } else {
      return pizzas.filter((pizza) => pizza.base === selectedBase);
    }
  };

  const handleButtonClick = (base) => {
    setSelectedBase(base);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedBase === "Tomate" ? styles.selectedButtonTomate : null,
          ]}
          onPress={() => handleButtonClick("Tomate")}
        >
          <Text style={styles.buttonText}>TOMATE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedBase === "Crème fraîche" ? styles.selectedButtonCreme : null,
          ]}
          onPress={() => handleButtonClick("Crème fraîche")}
        >
          <Text style={styles.buttonText}>CREME FRAICHE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedBase === "Chocolat" ? styles.selectedButtonChoco : null,
          ]}
          onPress={() => handleButtonClick("Chocolat")}
        >
          <Text style={styles.buttonText}>CHOCOLAT</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filterPizzas()}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Uri pour appler une image extérieure source pour image interne en asset */}
            <Image style={styles.image} source={item.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>
                {`${item.ingredients.join(", ").substring(0, 90)}${
                  item.ingredients.join(", ").length > 90 ? "..." : ""
                }`}
              </Text>
              <Text style={styles.price}>{item.price}€</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //Container prinipal
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  //container button
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  selectedButtonTomate: {
    backgroundColor: "#C00A27",
  },
  selectedButtonCreme: {
    backgroundColor: "#FFC222",
  },
  selectedButtonChoco: {
    backgroundColor: "#EDEDED",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  buttonTomate:{

  },
  card: {
    height: 250,
    width:"85%",
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "60%",
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 16,
    color: "black",
  },
});

export default MyMenu;
