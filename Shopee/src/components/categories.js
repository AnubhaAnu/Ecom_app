import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { filterData } from "./Data";

const Categories = ({ selectCategory, setSelectCategory }) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={filterData}
        keyExtractor={(item) => item.name}
        extraData={selectCategory}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              setSelectCategory(item.name);
            }}
          >
            <View
              style={
                selectCategory === item.name
                  ? { ...styles.newcategory }
                  : { ...styles.category }
              }
            >
              <Image
                style={{ height: 30, width: 30, borderRadius: 30 }}
                source={item.image}
              />
              <View>
                <Text
                  style={
                    selectCategory === item.name
                      ? { ...styles.textSelect }
                      : { ...styles.text }
                  }
                >
                  {item.name}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0ffff",
  },
  category: {
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 70,
  },
  newcategory: {
    borderRadius: 30,
    backgroundColor: "#f8f8ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 75,
  },
  text: {
    fontWeight: "normal",
  },
  textSelect: {
    fontWeight: "bold",
  },
});

export default Categories;
