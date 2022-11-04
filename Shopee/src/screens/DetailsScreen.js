import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PrimaryButton } from "../components/Button";

const DetailsScreen = ({ navigation, route }) => {
  const [cart, setCart] = useState([]);

  const item = route.params.paramkey;

  console.log("add-", cart);
  console.log("item-", item);

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
        </View>
        <View style={styles.mainProductview}>
          <View style={styles.productView}>
            <View style={styles.productTitle}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.imgStyle}
                  resizeMode="cover"
                  source={{ uri: route.params.paramkey.thumbnail }}
                />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{route.params.paramkey.title}</Text>
                <Text style={styles.price}>${route.params.paramkey.price}</Text>
                <Text style={{ fontSize: 20 }}>
                  {route.params.paramkey.description}
                </Text>
                <Text style={styles.dis}>
                  Discount-{route.params.paramkey.discountPercentage}%
                </Text>
                <Text style={{ fontSize: 18 }}>
                  Reviews-{route.params.paramkey.rating}⭐⭐⭐⭐ Stock--
                  {route.params.paramkey.stock}
                </Text>
                <View style={{ marginTop: 30 }}>
                  <PrimaryButton
                    style={{ display: "flex", backgroundColor: "#f5f5dc" }}
                    onPress={() =>
                      navigation.navigate("Cart", { paramkey: item })
                    }
                    title="Add to cart"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#f5f5dc",
    display: "flex",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#f5f5dc",
  },
  mainProductview: {
    width: "100%",
    height: "90%",
    backgroundColor: "#f5f5dc",
  },
  productTitle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  productView: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    display: "flex",
  },
  imgStyle: {
    width: "100%",
    aspectRatio: 1,
  },
  infoContainer: {
    width: "100%",
    height: "35%",
    backgroundColor: "#f5f5dc",
    display: "flex",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dis: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default DetailsScreen;
