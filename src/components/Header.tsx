import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

import colors from "../styles/colors";
import userImg from "../assets/jonas.png";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@platmanager:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text
            // numberOfLines={1} ellipsizeMode="tail"
            style={styles.userName}
          >
            {userName}
          </Text>
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
    lineHeight: 35,
    textTransform: "capitalize",
    // maxWidth: "90%",
    // backgroundColor: "blue",
  },
  image: {
    width: 76,
    height: 76,
    borderRadius: 50,
    position: "absolute",
    right: 0,
  },
});
