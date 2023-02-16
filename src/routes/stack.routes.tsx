import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

const StackRoutes = createNativeStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <StackRoutes.Navigator
      // screenOptions={{
      //   headerMode: "screen",
      //   headerTintColor: "white",
      //   headerStyle: { backgroundColor: "tomato" },
      // }}
      >
        <StackRoutes.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false, title: "Bem vindo!" }}
        />
        <StackRoutes.Screen
          name="UserIdentification"
          component={UserIdentification}
          options={{ headerShown: false, title: "Identificação do usuário" }}
        />
        <StackRoutes.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: false, title: "Confirmação" }}
        />
        <StackRoutes.Screen
          name="PlantSelect"
          component={PlantSelect}
          options={{ headerShown: false, title: "PlantSelect" }}
        />
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
