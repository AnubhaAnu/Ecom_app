import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Product = ({ item, cart, setCart, loading, product }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const handleAddtoCart = (item) => {
    setCart([...cart, { ...item }]);
  };

  return (
    <View style={styles.productView}>
      {/* <TextInput
        value={item}
        placeholder="Search Here"
        style={styles.input}
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        product
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => ( */}
      <View style={styles.productTitle}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            resizeMode="cover"
            source={{ uri: item.thumbnail }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.category}>{item.category}</Text>
          {cart.some((p) => p.id === item.id) ? (
            <TouchableOpacity>
              <Button
                title="Remove from Cart"
                color="#87cefa"
                onPress={() =>
                  setCart((prevItems) =>
                    prevItems.filter((prod) => prod.id !== item.id)
                  )
                }
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Button
                title="Add To Cart"
                onPress={() => handleAddtoCart(item)}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* ))
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  productTitle: {
    border: "solid",
    borderWidth: 2,
    backgroundColor: "#e6e6fa",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 77,
  },
  productView: {
    width: "80%",
    alignItems: "center",
    //backgroundColor: "#e6e6fa",
    marginTop: 8,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    colour: "#000",
    borderWidth: 1,
    width: "98%",
    marginLeft: 72,
    marginBottom: 5,
  },
  imgContainer: {
    alignItems: "center",
    backgroundColor: "#e6e6fa",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
  imgStyle: {
    width: "100%",
    height: "98%",
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Product;
