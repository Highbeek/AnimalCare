import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import LandingPage from "./App/components/LandingPage";
import LoginPage from "./App/components/LoginPage";
import Details from "./App/components/Details";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LandingPage />
      {/* <LoginPage /> */}
      {/* <Details/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
