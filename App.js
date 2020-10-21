import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import Constants from 'expo-constants';

const mapa = "https://www.google.com/maps/d/viewer?mid=1RKDLbgxEBEhoQq7fTv6dQ53MXrN4sYCM&ll=-12.235279329897665%2C-38.96082185049332&z=14";

const politica = "https://www.ecycle.com.br/3705-politica-nacional-de-residuos-solidos-pnrs.html";

const reportagem = "https://feirenses.com/cooperativa-badameiros-feira/";

const youtube = "https://www.youtube.com/channel/UCVWQSFj_goP-W1qiJTqj3uQ/playlists?view_as=subscriber";

const instagram = "https://www.instagram.com/reciclafsa/"

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text>{children}</Text>
          </TouchableOpacity>;
};

const image = { uri: "assets/background_purple.jpeg" };

const App = () => {
  return (

    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('assets/background_green.jpeg')} style={styles.image}>

            <Image 
              source={require('assets/logo.jpeg')}
              style={styles.logo}
            />

            <Text style={styles.text}>@reciclafsa</Text>
            
            <ScrollView style={styles.scrollView}>

            <OpenURLButton url={mapa}> Visualizar Mapa
            </OpenURLButton>

            <OpenURLButton url={politica}> Política Nacional de Resíduos Sólidos
            </OpenURLButton>

            <OpenURLButton url={reportagem}>Confira a reportagem sobre a COOBAFS
            </OpenURLButton>

            <OpenURLButton url={instagram}>Nosso Instagram
            </OpenURLButton>

            <OpenURLButton url={youtube}>Nosso canal no YouTube
            </OpenURLButton>
        
          </ScrollView>
        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  
  scrollView: {
    marginHorizontal: -20,
  },
  
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 5
  },

  image: { 
    flex: 1, 
    width: 375,
    justifyContent: "center", 
    alignItems: "center",
    resizeMode: "cover"
  },

  button: {
    position: "relative",
    flex: 1,
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 20
  },

  icons: {
    padding: 10,
    width: 50,
    height: 50,
    resizeMode: "stretch"
  },

  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 40,
  }
});

export default App;
