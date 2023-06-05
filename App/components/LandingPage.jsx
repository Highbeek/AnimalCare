import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LandingHero, animalDetails } from "./Index";

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const onChangeText = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hi, <Text style={styles.headerSpanText}>Peter </Text>
        </Text>
        <Ionicons
          name="notifications-outline"
          style={styles.headerNotification}
        />
      </View>
      <View style={styles.genInput}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={search}
            placeholder="Search"
          />
        </View>
        <View style={styles.filter}>
          <Ionicons name="filter-outline" style={styles.filterIcon} />
        </View>
      </View>

      <ScrollView horizontal={true} contentContainerStyle={styles.animalList}>
        {animalDetails.map(({ uid, name, imageUrl }) => (
          <View key={uid} style={[styles.card, styles.animalCard]}>
            <Image source={{ uri: imageUrl }} style={styles.animalImage} />
            <Text style={styles.animalName}>{name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.heroHeader}>
        <View style={styles.heroText}>
          <Text style={[styles.firstChild, styles.texts]}>Recent</Text>
          <Text style={styles.texts}>Popular</Text>
        </View>
        <View>
          <Text style={styles.texts}>See all</Text>
        </View>
      </View>

      <ScrollView style={styles.landingPageHero}>
        {LandingHero.map(({ uid, name, address, imageUrl, pet }) => (
          <View key={uid} style={styles.landingcard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.landingImage}
            />
            <View style={styles.landingHeader}>
              <View style={styles.sellerDetails}>
                <Text style={styles.landingHeaderText}>{name}</Text>
                <Text style={styles.landingHeaderText}>{pet}</Text>
              </View>
              <TouchableOpacity style={styles.landingButton}>
                <Text style={styles.btnTxt}>Adopt</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.heroFtext}>
                <Ionicons name="paw-outline" style={styles.addressIcon} />{" "}
                {name}
              </Text>
              <Text style={styles.heroFtext}>
                <Ionicons name="location-outline" style={styles.addressIcon} />{" "}
                {address}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: "100%",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "600",
    paddingHorizontal: 10,
    color: "#333",
  },
  headerSpanText: {
    color: "#000",
    fontSize: 26,
  },
  headerNotification: {
    fontSize: 24,
    fontWeight: "600",
  },
  genInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f5f3f4",
  },
  searchIcon: {
    fontSize: 24,
    marginRight: 10,
    color: "gray",
  },
  input: {
    flex: 1,
    height: 40,
    fontWeight: "600",
    fontSize: 18,
  },
  filterIcon: {
    fontSize: 24,
    marginLeft: 10,
    color: "gray",
    borderWidth: 1,
    padding: 6,
    borderRadius: 8,
  },
  heroHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 20,
  },
  heroText: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  firstChild: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  texts: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
    position: "relative",
  },
  animalList: {
    marginBottom: 100,
  },
  animalCard: {
    marginVertical: 15,
  },
  animalName: {
    color: "#000",
    top: 0,
    position: "absolute",
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  animalImage: {
    height: 120,
    width: 90,
    borderRadius: 20,
  },
  landingcard: {
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  landingImage: {
    height: 180,
    width: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  landingHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
  },
  sellerDetails: {
    alignItems: "flex-start",
  },
  landingButton: {
    backgroundColor: "#000",
    borderRadius: 30,
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: 130,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  landingHeaderText: {
    justifyContent: "flex-start",
    fontSize: 22,
    padding: 0,
    fontWeight: "600",
    alignItems: "flex-start",
  },
  landingPageHero: {
    flexGrow: 1,
  },
  heroFtext: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    paddingVertical: 5,
  },
  addressIcon: {
    fontSize: 18,
  },
});
