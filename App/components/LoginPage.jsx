import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LoginPageBackground } from "./Index";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {LoginPageBackground.map(({ img }) => (
        <View key={img} style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: img }}
            resizeMode="cover"
            style={styles.loginImage}
          >
            <View style={styles.textContainer}>
              <Text style={styles.loginText}>Adopt a Pet, </Text>
              <Text style={styles.loginText}>Save Their Life</Text>
              <Text style={styles.subtitleText}>
                Start adoption to give them a a fur-over home
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.btnWrapper}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTwo}>
              <Text style={styles.btnTextTwo}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  imageContainer: {
    flex: 1,
  },
  loginImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  loginText: {
    fontSize: 58,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  textContainer: {
    marginVertical: 20,
    paddingVertical: 60,
  },
  subtitleText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  btn: {
    flex: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#edede9",
  },
  btnTwo: {
    flex: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#000",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  btnTextTwo: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
    paddingHorizontal: 40,
    color: "#fff",
  },
});
