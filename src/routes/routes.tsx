import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from "../screens/home";
import { Tela1 } from "../screens/tela1";
import { Tela2 } from "../screens/tela2";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  Home: String | undefined;
  Drawer: String | undefined;
  Tela1: String | undefined;
  Tela2: String | undefined;
};



export function Routes() {
    return (
       <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
       >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Drawer" component={MyDrawer} />
       </Stack.Navigator>
    );
}

function MyDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen name="Primeira tela" component={Tela1} />
        <Drawer.Screen name="Segunda Tela" component={Tela2} />
      </Drawer.Navigator>
    );
  }