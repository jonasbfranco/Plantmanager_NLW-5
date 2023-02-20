import React from "react";
import { StatusBar, Platform } from "react-native";

export function StatusBarColor() {
  return (
    <StatusBar
    animated={true}
    backgroundColor="#F0F0F0"
    barStyle="dark-content"
    // barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
    />

    // <StatusBar animated={true} backgroundColor="#F1F1F1" barStyle="dark-content" />
  );
}
