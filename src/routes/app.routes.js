import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home";
import AccountConfig from "../screens/AccountConfig";
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TransactionsRoutes from "./transaction.routes";
const AppTab = createBottomTabNavigator();

export default function AppRoutes(){
    return(
        <AppTab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#A6BC09",
                tabBarStyle: {
                    backgroundColor: "#10403B",
                    borderTopWidth: 0,
                },
                unmountOnBlur: true
            }}
        >
            <AppTab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="home" color={color} size={size} />
                    }
                }}
            />
            <AppTab.Screen 
                name="TransactionsRoutes" 
                component={TransactionsRoutes}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        return <MaterialIcons name="attach-money" color={color} size={size} />
                    }
                }}
            />
            <AppTab.Screen 
                name="AccountConfig" 
                component={AccountConfig}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="settings" color={color} size={size} />
                    }
                }}
            />
        </AppTab.Navigator>
    )
}