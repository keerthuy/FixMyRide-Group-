//page13

import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>

     
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.illustrationContainer}>
        <Image
          source={require("../assets/images/image.png")} 
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.heading}>Book Ahead or Get Instant Help</Text>

      
      <Text style={styles.subtext}>
        Schedule Service at your convenience or request emergency services anytime, anywhere.
      </Text>

      
      <TouchableOpacity style={styles.nextButton} onPress={() => { }}>
        <Ionicons name="arrow-forward" size={28} color="#fff" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  topBar: {
    position: "absolute",
    top: 50,
    right: 24,
    zIndex: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#0b0b0bff",
    fontWeight: "bold",
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  illustration: {
    width: 350,
    height: 600,
    marginBottom: 20,
    marginTop: 20,
    
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginHorizontal: 24,
    marginTop: 40,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginHorizontal: 32,
    marginBottom: 100,
    marginTop: 20,
  },
  nextButton: {
   backgroundColor: "#4A4AFF",
    padding: 12,
    borderRadius: 8,
        position: "absolute",
    bottom: 40,
    right: 32,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});



//page17

{/*
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LocateServicesScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.skipText}>Skip</Text>

      <Text style={styles.title}>Locate Trusted{"\n"}Services Near You</Text>

      
      <Text style={styles.description}>
        Whether it’s a flat tire or engine trouble find reliable help close to
        your location fast and easy.
      </Text>

      
      <Image
        source={require("../assets/images/image2.png")} 
        style={styles.image}
        resizeMode="contain"
      />

      
      <TouchableOpacity style={styles.arrowButton}>
        <Ionicons name="arrow-forward" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  skipText: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  image: {
    width: "90%",
    height: 250,
    marginBottom: 20,
  },
  arrowButton: {
    backgroundColor: "#4A4AFF",
    padding: 12,
    borderRadius: 8,
        position: "absolute",
    bottom: 40,
    right: 32,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,

  },
  arrowText: {
    color: "#fff",
    fontSize: 20,
  },
});
*/}


//page 15
{/*
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
     
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => {  }}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.illustrationContainer}>
        <Image
          source={require("../assets/images/image3.png")} 
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      
      <Text style={styles.heading}>Pay Your Way</Text>

      
      <Text style={styles.subtext}>
        Enjoy hassle-free payments with Stripe or choose cash on delivery—whatever suits you best.
      </Text>

     
      <TouchableOpacity style={styles.nextButton} onPress={() => {  }}>
        <Ionicons name="arrow-forward" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  topBar: {
    position: "absolute",
    top: 50,
    right: 24,
    zIndex: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#05010cff",
    fontWeight: "bold",
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  illustration: {
    width: 300,
    height:350,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginHorizontal: 24,
    marginBottom: 20,
    marginTop:150,
  },
  subtext: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginHorizontal:40,
    marginBottom: 300,
  },
  nextButton: {
    backgroundColor: "#4A4AFF",
    padding: 12,
    borderRadius: 8,
        position: "absolute",
    bottom: 40,
    right: 32,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
*/}

//page 18

{/*
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.skipText}>Skip</Text>

      
      <Text style={styles.title}>Ready to move ?</Text>

      <Image
       source={require("../assets/images/image4.png")}  
        style={styles.image}
        resizeMode="contain"
      />

      
      <Text style={styles.description}>
        Start exploring your service now. fast booking real time help, and
        secure payment await.
      </Text>

      
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Start Now</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.arrowButton}>
       <Ionicons name="arrow-forward" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  skipText: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 10,
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: "#4A4AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  arrowButton: {
    backgroundColor: "#4A4AFF",
    padding: 12,
    borderRadius: 8,
        position: "absolute",
    bottom: 40,
    right: 32,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  arrowText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

*/}
