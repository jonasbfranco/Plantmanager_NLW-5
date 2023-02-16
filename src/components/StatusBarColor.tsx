import React from "react";
import { StatusBar, Platform } from "react-native";

export function StatusBarColor() {
  return (
    <StatusBar
      barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
    />
  );
}
