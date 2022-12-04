import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountConfig from "../screens/AccountConfig";
import EditAccount from "../screens/AccountConfig/EditAccount";

const SettingsStack = createNativeStackNavigator()

export default function SettingsRoutes(){
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="AccountConfig"
                component={AccountConfig}
                options={{
                    headerShown: false,
                }}
            />
            <SettingsStack.Screen 
                name="EditAccount"
                component={EditAccount}
                options={{
                    headerStyle:{
                        backgroundColor: '#10403B',
                        borderBottomWidth: 1,
                        borderBottomColor: '#A6BC09'
                    },
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerTitle: "Voltar para as configurações"
                }}
            />
        </SettingsStack.Navigator>
    )
}