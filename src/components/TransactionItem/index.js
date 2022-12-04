import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import  Feather  from 'react-native-vector-icons/Feather'
import { AuthContext } from '../../contexts/auth'
import { Transaction, ContainerTransaction, Date, Type, ValueContainer, TypeContainer, ValueTransaction } from './styles'


export default function TransactionItem({ data }){
    const { user } = useContext(AuthContext)
  return (
    <ContainerTransaction>
        <Transaction>
            <Date>{data?.date}</Date>
            <TypeContainer sender={data?.sender} userName={user?.username}>
                <Feather 
                    name={data?.sender === user?.username ? "arrow-down" : "arrow-up"}
                    color="#FFF" 
                    size={22}
                />
                <Type>
                    {data?.type}
                </Type>
            </TypeContainer>
            <ValueContainer>
                <ValueTransaction>R$ {data?.value}</ValueTransaction>
            </ValueContainer>
        </Transaction>
    </ContainerTransaction>
  )
}