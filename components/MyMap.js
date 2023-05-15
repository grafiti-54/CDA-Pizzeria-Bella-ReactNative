import React from "react";
import { View, Dimensions, Text } from "react-native";
import { WebView } from "react-native-webview";

const MyMap = () => {
  const latitude = 49.5348465;
  const longitude = 5.787182;
  const zoom = 16;

  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple Map</title>
      <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
      <link href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" rel="stylesheet" />
      <style>
        #map { position:absolute; top:0; bottom:0; width:100%; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      <script>
        var map = L.map('map').setView([${latitude}, ${longitude}], ${zoom});
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([${latitude}, ${longitude}]).addTo(map)
          .bindPopup('Pizzeria Bella')
          .openPopup();
      </script>
    </body>
    </html>
  `;

  return (
    <View
      style={{
        height: 500,
        position: "relative",
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: "white",
      }}
    >
      <WebView
        originWhitelist={["*"]}
        source={{ html: mapHtml }}
        style={{
          height: Dimensions.get("window").height,
          width: "100%",
          marginLeft: 0,
        }}
      />
      <View
        style={{
          backgroundColor: "#C00A27",
          width: "100%",
        }}
      >
        <Text
          style={{
            position: "absolute",
            left: 20,
            bottom: 80, // dynamique
            fontSize: 18,
            fontFamily: "Paprika",
            color: "white",
            backgroundColor: "#C00A27",
            padding: 10,
            borderRadius: 50,
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          8 Av. du Prieuré, 54810 Longlaville
        </Text>
      </View>
    </View>
  );
};

export default MyMap;
