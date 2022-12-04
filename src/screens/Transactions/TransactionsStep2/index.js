import React from 'react'
import { Text, View } from 'react-native'

export default function TransactionsStep2(props){
  return (
    <View>
        <Text>
            {props.route.params?.value}
        </Text>
    </View>
  )
}
