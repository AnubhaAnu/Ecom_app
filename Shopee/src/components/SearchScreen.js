import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const SearchScreen = ({ loading, product }) => {
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        {loading ? (
          <Text>Loading ...</Text>
        ) : (
          product
            .filter((prod) => {
              if (searchTitle === "") {
                return prod;
              } else if (
                prod.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return prod;
              }
            })
            .map((item) => <Text key={item.id}>{item.title}</Text>)
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    colour: "#000",
    borderWidth: 1,
  },
  iconStyle: {
    marginTop: 12,
    marginHorizontal: 8,
  },
});
