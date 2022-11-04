import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

const Categories = ({ selectCategory, setSelectCategory }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View key={index} style={styles.container}>
          <TouchableOpacity onPress={() => setSelectCategory(category)}>
            <Text
              style={
                category == selectCategory
                  ? { ...styles.category, ...styles.newcategory }
                  : styles.category
              }
            >
              {category}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0ffff",
  },
  category: {
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 16,
    margin: 10,
    borderRadius: 10,
    //backgroundColor: "#FFB266",
  },
  newcategory: {
    padding: 8,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 21,
    margin: 6,
    borderRadius: 10,
    backgroundColor: "#f8f8ff",
  },
});

export default Categories;
