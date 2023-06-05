import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { details } from "./Index";

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsHeader}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Details</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://img.freepik.com/premium-photo/cat-sits-table-with-green-background-blue-background_849761-4668.jpg?w=740",
        }}
        style={styles.img}
      />
      <View style={styles.landingHeader}>
        <View style={styles.sellerDetails}>
          <Text style={styles.detailsHeaderText}>British Hairlong Cat</Text>
        </View>
      </View>
      <View style={styles.heroFHeader}>
        <Text style={styles.heroFtext}>
          <Ionicons name="paw-outline" style={styles.addressIcon} /> Coco Meow
        </Text>
        <Text style={styles.heroFtext}>
          <Ionicons name="location-outline" style={styles.addressIcon} /> 10 mil
          -cissat,Kab Sukabumi, Indonesia
        </Text>
      </View>
      <View style={styles.detailsTwoHeader}>
        <View style={styles.details}>
          <Text style={styles.deHead}>About</Text>
          <View style={styles.detailsTag}>
            {details.map(({ id, text, name, color }) => (
              <View key={id} style={styles.tag}>
                <Ionicons name={name} style={{ fontSize: 18, color: color }} />
                <Text style={styles.tagText}>{text}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.btnTxt}>Set Your Enquiry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: 600,
    paddingVertical: 20,
  },
  icon: {
    fontSize: 24,
  },
  img: {
    height: "40%",
  },
  landingHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  sellerDetails: {
    alignItems: "flex-start",
  },
  detailsButton: {
    backgroundColor: "#000",
    borderRadius: 30,
    color: "#fff",
    paddingHorizontal: "10%",
    paddingVertical: 20,
    marginHorizontal: "3%",
    width: "94%",
    alignItems: "center",
  },

  btnTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  detailsHeaderText: {
    justifyContent: "flex-start",
    fontSize: 22,
    padding: 0,
    fontWeight: "600",
    alignItems: "flex-start",
  },
  heroFHeader: {
    paddingHorizontal: 20,
  },
  heroFtext: {
    fontSize: 18,
    color: "#333",
    fontWeight: 600,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    paddingVertical: 5,
  },
  addressIcon: {
    fontSize: 18,
  },
  detailsTwoHeader: {
    paddingHorizontal: 15,
  },
  details: {
    borderRadius: 30,
    marginVertical: 20,
    backgroundColor: "#eeeeee",
    height: 170,
    width: "100%",
  },
  deHead: {
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  detailsTag: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tag: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  tagText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
