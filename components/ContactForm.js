import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text } from "react-native";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (name.length < 3) {
      Alert.alert("Erreur", "Minimum 3 caractères pour le nom");
    } else if (subject.length < 3) {
      Alert.alert("Erreur", "Le sujet doit contenir 3 caractères minimum");
    } else if (message.length < 3) {
      Alert.alert("Erreur", "En manque d'inspiration pour le message ?");
    } else if (name && email && subject && message) {
      Alert.alert("Succès", "Message envoyé");
    } else {
      Alert.alert(
        "Erreur",
        "Erreur lors de l'envoi du message. Veuillez réessayer."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envoyer-nous un message</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Sujet"
        value={subject}
        onChangeText={setSubject}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={sendEmail}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: "5%",
    backgroundColor: "#F5F5F5",
    borderWidth: 15,
    borderColor: "#FFFFFF",
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderColor: "#FFFFFF",
  },
  textArea: {
    height: 100,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 20,
    overflow: "hidden",
    width: "50%",
  },
  button: {
    backgroundColor: "#ffd700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight:"bold",
    padding:8,
    fontFamily: "Yanone-Kaff",
  },
});

export default ContactForm;
