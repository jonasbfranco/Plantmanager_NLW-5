import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";
import { PlantSave } from "../pages/PlantSave";
import { MyPlants } from "../pages/MyPlants";
import AuthRoutes from "./tabs.routes";

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
          component={AuthRoutes}
          options={{ headerShown: false, title: "Selecionar Planta" }}
        />
        <StackRoutes.Screen
          name="PlantSave"
          component={PlantSave}
          options={{ headerShown: false, title: "Salvar Planta" }}
        />
        <StackRoutes.Screen
          name="MyPlants"
          component={AuthRoutes}
          options={{ headerShown: false, title: "Minhas Plantas" }}
        />
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
