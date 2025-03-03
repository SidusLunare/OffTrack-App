import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  Image,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/Landing-Background-2.png")}
    >
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require("../assets/images/main-logo.svg")}
        />
        <Text style={styles.logoText}>Offtrack</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.landingScreenButton}
          onPress={() => console.log("Register Button pressed")}
        >
          <Text style={styles.landingScreenText}>Register</Text>
        </Pressable>
        <Pressable
          style={styles.landingScreenButton}
          onPress={() => console.log("Login Button pressed")}
        >
          <Text style={styles.landingScreenText}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 20,
    width: "85%",
    height: "100%",
    marginBottom: "100",
  },
  landingScreenButton: {
    borderRadius: 10,
    backgroundColor: "black",
    width: "100%",
    height: 55,
    fontSize: 100,
    color: "white",
  },
  landingScreenText: {
    fontSize: 15,
    letterSpacing: 1.1,
    lineHeight: 55,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "white",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {},
  logoImage: {
    width: "100%",
    height: 39,
    color: "black",
  },
  logoText: {
    fontSize: 25,
    letterSpacing: 1.8,
    lineHeight: 55,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#000",
    textAlign: "left",
  },
});
