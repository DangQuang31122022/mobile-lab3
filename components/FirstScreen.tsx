import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.title}>GROW</Text>
      <Text style={styles.title}>YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login 2a");
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2196F3", // Màu xanh dương từ hình ảnh
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  circle: {
    width: 100, // Điều chỉnh kích thước theo ý muốn
    height: 100,
    borderRadius: 50,
    backgroundColor: "black",
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    width: 120,
    backgroundColor: "#FFC107", // Màu vàng từ hình ảnh
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FirstScreen;
