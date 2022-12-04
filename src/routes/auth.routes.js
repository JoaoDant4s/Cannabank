import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import RegisterStep2 from "../screens/Register/RegisterStep2";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown: false}}           
            />
            <AuthStack.Screen 
                name="Register" 
                component={Register} 
                options={{
                    headerStyle:{
                        backgroundColor: '#10403B',
                        borderBottomWidth: 1,
                        borderBottomColor: '#A6BC09'
                    },
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerTitle: "Voltar para login"
                }}
            />
            <AuthStack.Screen 
                name="RegisterStep2"
                component={RegisterStep2}
                options={{
                    headerStyle:{
                        backgroundColor: '#10403B',
                        borderBottomWidth: 1,
                        borderBottomColor: '#A6BC09'
                    },
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerTitle: "Voltar"
                }}
            />
        </AuthStack.Navigator>
    )
}