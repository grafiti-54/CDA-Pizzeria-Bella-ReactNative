import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Menu des options de recherche.
const Header = () => {
  return (
    // Container header
    <View
      style={{
        backgroundColor: "#C00A27",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {/* Ligne grise (hr) */}
      <View
        style={{
          height: 1,
          width: "70%",
          backgroundColor: "lightgray",
          alignSelf: "center",
          marginVertical: 8,
        }}
      />

      {/* Input de recherche */}
      <TextInput
        style={{
          height: 40,
          width: "80%",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: "white",
          paddingHorizontal: 10,
          alignSelf: "center",
          marginBottom: 8,
        }}
        placeholder="Rechercher"
      />

      {/* Premiere ligne d'icone */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          paddingVertical: 8,
        }}
      >
        {/*  Pizza */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 8,
          }}
        >
          <FontAwesome5 name="pizza-slice" size={24} color="#CECECE" />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Pizza
          </Text>
        </Pressable>

        {/*  Burger */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="hamburger" size={24} color="#CECECE" />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Burger
          </Text>
        </Pressable>

        {/*  Salade*/}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="restaurant" size={24} color="#CECECE" />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Salad
          </Text>
        </Pressable>

        {/*  Tacos */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="taco" size={24} color="#CECECE" />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Tacos
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          paddingVertical: 8,
        }}
      >
        {/* Wraps */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 8,
          }}
        >
          <MaterialCommunityIcons
            name="food-hot-dog"
            size={24}
            color="#CECECE"
          />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Wraps
          </Text>
        </Pressable>

        {/*  Frites */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="french-fries"
            size={24}
            color="#CECECE"
          />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Fries
          </Text>
        </Pressable>

        {/*  Desserts */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="cupcake" size={24} color="#CECECE" />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Desserts
          </Text>
        </Pressable>

        {/*  Drinks */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="bottle-soda-classic-outline"
            size={24}
            color="#CECECE"
          />
          <Text
            style={{
              marginLeft: 8,
              fontWeight: "bold",
              color: "#CECECE",
              fontSize: 15,
            }}
          >
            Drinks
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
