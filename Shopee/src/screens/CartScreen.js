import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
//import Icon from "react-native-vector-icons/MaterialIcons";

const CartScreen = ({ navigation, route }) => {
  const cartItems = route.params.cart;
  return (
    <View style={styles.container}>
      {cartItems ? (
        cartItems.map((item) => (
          <View style={styles.image} key={item.id}>
            <Image
              style={styles.imgStyle}
              source={{
                uri: item.thumbnail,
              }}
            />
            <View style={{ flex: 3, marginLeft: 10 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text style={{ fontSize: 10, fontWeight: "600" }}>
            Your cart is empty...
          </Text>
        </View>
      )}
      <View style={styles.total}>
        <Text
          style={{
            marginLeft: 270,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Total--${cartItems.reduce((acc, item) => acc + item.price, 0)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e0ffff",
  },
  image: {
    backgroundColor: "#f5f5dc",
    border: "solid",
    borderWidth: 2,
    padding: 15,
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 8,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
  },
  total: {
    display: "flex",
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "yellow",
  },
  imgStyle: {
    width: 100,
    height: 80,
    flex: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
