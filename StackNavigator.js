import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MenuPizzaScreen from "./screens/MenuPizzaScreen";
import ContactScreen from "./screens/ContactScreen";
import { AntDesign } from "@expo/vector-icons"; //https://icons.expo.fyi/
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Fonts
import { useFonts } from "expo-font"; //npm i expo-font
import AvenirNext from "./assets/font/AvenirNextCyr-Regular.ttf"
import HelveticaNeue from "./assets/font/HelveticaNeue-Regular.ttf"
import Paprika from "./assets/font/Paprika-Regular.ttf"
import YanoneKaff from "./assets/font/YanoneKaffeesatz-Regular.ttf"

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  //Supprime le theme(blanc) d'origine de react-navigation.
  const navTheme = {
    colors: {
      background: "transparent",
    },
  };

  const [isFontLoaded] = useFonts({
    "Avenir-Next": AvenirNext,
    "Helvetica-Neue" : HelveticaNeue,
    "Paprika" : Paprika,
    "Yanone-Kaff" : YanoneKaff,
  });

  //Menu en bas de l'écran du téléphone.
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            //position: 'absolute',
            height: 80,
            backgroundColor: "#C00A27",
          },
          //tabBarActiveTintColor: "#00A149", // Couleur du label et de l'icône quand l'onglet est actif
          //tabBarInactiveTintColor: "white", // Couleur du label et de l'icône quand l'onglet est inactif
        }}
      >
        {/* Accueil menu en bas de l'écran du téléphone. */}
        <Tab.Screen
          name="Home" // name à utiliser lors de l'utilisation de navigation.navigate("Home".....
          component={HomeScreen}
          options={{
            tabBarLabel: "Accueil",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={34} color="#00A149" /> // icone plein avec focus.
              ) : (
                <AntDesign name="home" size={34} color="white" /> // icon vide sans focus.
              ),
            tabBarLabelStyle: {
              color: "white", // change la couleur du label.
              fontSize: 16, // change la taille du label.
              fontFamily: "Paprika",
            },
          }}
        />
        {/* Favoris menu en bas de l'écran du téléphone. */}
        <Tab.Screen
          name="Menus"
          component={MenuPizzaScreen}
          options={{
            tabBarLabel: "Nos menus",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="pizza" size={34} color="#00A149" /> // icone plein avec focus.
              ) : (
                <Ionicons name="pizza-outline" size={34} color="white" /> // icone vide sans focus.
              ),
            tabBarLabelStyle: {
              color: "white", // change la couleur du label.
              fontSize: 16, // change la taille du label.
              fontFamily: "Paprika",
            },
          }}
        />
        {/* Réservation menu en bas de l'écran du téléphone. */}
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarLabel: "Contact",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="contacts"
                  size={34}
                  color="#00A149"
                /> // icone plein avec focus.
              ) : (
                <MaterialCommunityIcons
                  name="contacts-outline"
                  size={34}
                  color="white"
                /> // icone vide sans focus.
              ),
            tabBarLabelStyle: {
              color: "white", // change la couleur du label.
              fontSize: 16, // change la taille du label.
              fontFamily: "Paprika",
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer theme={navTheme}>
    {isFontLoaded ? (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="menus"
          component={MenuPizzaScreen}
          options={{ headerShown: false }} // cache le header. Sera défini dans chaque screen pour afficher le header dynamiquement.
        />
        <Stack.Screen
          name="contact"
          component={ContactScreen}
          options={{ headerShown: false }} // cache le header. Sera défini dans chaque screen pour afficher le header dynamiquement.
        />
      </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
