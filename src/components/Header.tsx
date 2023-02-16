import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

import colors from "../styles/colors";
import userImg from "../assets/jonas.png";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>Jonas</Text>
        </View>
        <Image source={userImg} style={styles.image} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 30,
  },
  image: {
    width: 76,
    height: 76,
    borderRadius: 50,
  },
});
