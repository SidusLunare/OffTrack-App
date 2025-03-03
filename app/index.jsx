import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

export default function App() {
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/images/background1.jpg')}>
      <View
      style={styles.container}>
        <Text style={styles.title}>app</Text>
        <Image
        style={styles.image}
        source={require('../assets/images/background1.jpg')}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})
