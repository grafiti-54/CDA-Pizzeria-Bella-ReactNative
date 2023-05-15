import { ScrollView, StyleSheet, Text, View, Animated } from "react-native";
import React, { useLayoutEffect, useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../components/Header";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import Promotion from "../components/Promotion";
import MyMap from "../components/MyMap";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const scrollRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              fontFamily: "Paprika",
              fontWeight: "400",
              transform: [{ rotate: "-10deg" }],
            }}
          >
            Pizza Bella
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="phone" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: "5%" }}>
              01 02 03 04 05
            </Text>
          </View>
        </View>
      ),

      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        transform: [{ rotate: "-10deg" }],
        fontFamily: "Paprika",
        fontWeight: "400", // preciser fontWeight pour modifier la fontFamily.
      },
      headerStyle: {
        backgroundColor: "#C00A27",
        height: 110,
        borderBottomColor: "transparent", // supprime la séparation de l'élément.
        shadowColor: "transparent", // supprime la séparation de l'élément.
      },
      headerRight: () => (
        <FontAwesome
          name="search"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
          //Affiche/cache le sous menu de recherche lors du clic sur la loupe.
          onPress={() => {
            setHeaderVisible(!isHeaderVisible);
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
            }
          }}
        />
      ),
    });
  }, [isHeaderVisible]);

  return (
    //Animated permet de remonter en haut de l'écran lors du clic sur la loupe de recherche.
    <Animated.ScrollView style={{ flex: 1 }} ref={scrollRef}>
      {isHeaderVisible && <Header />}
      <View>
        <HomeCarousel />
      </View>
      <View>
        <Promotion />
      </View>
      <View style={{width: "100%"}}>
        <MyMap />
      </View>
      <View>
        <Footer />
      </View>
    </Animated.ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
