import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import AuthProvider from "./src/contexts/auth";
import Routes from "./src/routes";

export default function App(){
  return(
    <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#10403B" barStyle="light-content"/>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  )
}