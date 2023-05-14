import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import pizza1 from "../assets/homeCarousel/Slider.png";
import pizza2 from "../assets/homeCarousel/Slide_2.png";
import pizza3 from "../assets/homeCarousel/Slide_3.png";
import pizza4 from "../assets/homeCarousel/Slide_4.png";

const ENTRIES = [
  {
    title: "LA VEGGIE",
    subtitle: "Une nouvelle offre végétarienne.",
    image: pizza1,
    bottomTitle: 300,
    bg: "#FFAE00",
    bottomSubTitle: 200,
    leftTitle:90,
  },
  {
    title: "Payer par carte",
    subtitle: "Payer facilement et en toute sécurité",
    image: pizza2,
    bottomTitle: 320,
    bg: "#8CA93E",
    bottomSubTitle: 200,
    leftTitle:10,
    
  },
  {
    title: "Des prix fondants",
    subtitle: "Pizza 4 fromages à seulement 10€",
    image: pizza3,
    bottomTitle: 280,
    bg: "#C00A27",
    bottomSubTitle: 200,
    leftTitle:50,
    
  },
  {
    title: "Offre limitée",
    subtitle: "2 pizzas pour le prix d'une !",
    image: pizza4,
    bottomTitle: 300,
    bg: "#8CA93E",
    bottomSubTitle: 200,
    leftTitle:20,
    
  },
  // ajoutez plus d'entrées si nécessaire
];

const HomeCarousel = () => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={4}
      autoplayLoop
      index={2}
      //showPagination
      data={ENTRIES}
      renderItem={({ item }) => (
        <View
          style={{
            width: Dimensions.get("window").width, // full width
            backgroundColor: "white",
            borderRadius: 5,
            marginBottom:0,
          }}
        >
          <Image source={item.image} style={{ flex: 1 }} resizeMode="cover" />
          <View style={{ flex:1, position: "relative", bottom: 10, left: 10 }}>
            <Text
              style={{
                position: "absolute",
                left:item.leftTitle,
                bottom:item.bottomTitle, // dynamique
                fontSize: 34,
                fontFamily: "Paprika",
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                backgroundColor: item.bg, // dynamique
                position: "absolute",
                bottom:item.bottomSubTitle, // dynamique
                left: 45,
                padding: 10,
                borderRadius:25,
                fontSize: 18,
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}
            >
              {item.subtitle}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default HomeCarousel;



