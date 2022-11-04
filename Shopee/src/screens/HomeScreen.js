import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ModalDropdown from "react-native-modal-dropdown";
import Product from "../components/Product";
import Categories from "../components/categories";

const HomeScreen = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [text, setText] = useState("");
  const [sortPrice, setSortPrice] = useState("sort By");
  const [loading, setLoading] = useState(false);
  const [selectCategory, setSelectCategory] = useState("smartphones");

  console.log("AddToCart-", cart);

  const getProducts = async () => {
    setLoading(true);
    const APIlink = `https://dummyjson.com/products/category/${selectCategory}`;
    await axios
      .get(APIlink)
      .then(({ data }) => {
        setProduct(data.products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [selectCategory]);

  const handleSelect = (sort) => {
    console.log("e--", sort);
    setSortPrice(sort);
    if (sortPrice === 1) {
      setProduct(product.sort((a, b) => +a.price - +b.price));
    } else {
      setProduct(product.sort((a, b) => +b.price - +a.price));
    }
  };

  const searchData = (text) => {
    const newData = product.filter((item) => {
      const itemData = item.title.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });

    setProduct(newData);
    setText(text);
  };

  console.log("product-", product);

  const renderItem = ({ item }) => (
    <Product item={item} setCart={setCart} cart={cart} product={product} />
  );

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 30, color: "purple", fontWeight: "bold" }}>
            Shopee
          </Text>
        </View>
        <View style={styles.feature}>
          <Icon
            name="shopping-cart"
            size={28}
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate("Cart", { cart })}
          />
          <ModalDropdown
            defaultValue="Sort by"
            options={["asc", "desc"]}
            textStyle={{ fontWeight: "bold" }}
            style={{ marginRight: 15 }}
            onSelect={handleSelect}
          />
        </View>
      </View>
      {loading === false ? (
        <View style={styles.mainProductview}>
          <Categories
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => searchData(text)}
            value={text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <Text>loading</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#f0ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  feature: { display: "flex", flexDirection: "row", marginRight: 2 },
  mainView: {
    flex: 1,
    backgroundColor: "#f0ffff",
  },
  mainProductview: {
    width: "100%",
    marginTop: 5,
    height: "92%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    colour: "#000",
    borderWidth: 1,
  },
  header: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sortBtn: {
    marginLeft: 10,
    height: 30,
    minHeight: 42,
    width: 30,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
