import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Transactions from "../screens/Transactions";
import TransactionsStep2 from "../screens/Transactions/TransactionsStep2";

const AuthTransactionStack = createNativeStackNavigator()

export default function TransactionsRoutes(){
    return(
        <AuthTransactionStack.Navigator>
            <AuthTransactionStack.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    headerShown: false,
                }}
            />
            <AuthTransactionStack.Screen 
                name="TransactionsStep2"
                component={TransactionsStep2}
                options={{
                    headerShown: false,
                }}
            />
        </AuthTransactionStack.Navigator>
    )
}