import React, { useContext, useState } from "react";
import TransactionItem from "../../components/TransactionItem";
import { AuthContext } from "../../contexts/auth";
import { Background } from "../Login/styles";
import { BalanceMoney, BalanceText, ContainerBalance, ContainerInfo, LastMovimentationTitle, Name, Welcome, List } from "./styles";

export default function Home(){
    const { user } = useContext(AuthContext)
    const [ transactions, setTransactions] = useState([
        {
            key: 0, 
            date: "29/12/2001", 
            receiver: "Zezo", 
            sender: "Joao Dantas1", 
            description: "haha",
            value: 200,
            type: "TED"
        },
        {
            key: 1, 
            date: "10/12/2022", 
            receiver: "Joao Dantas1", 
            sender: "Zezo", 
            description: "hahahihi",
            value: 350,
            type: "TED"
        },
    ])

    return(
        <Background>
            <ContainerInfo>
                <Welcome>Bem vindo, <Name>{user?.username}</Name></Welcome>
            </ContainerInfo>
            <ContainerBalance>
                <BalanceText>Saldo</BalanceText>
                <BalanceMoney>R$ {user?.account.balance}</BalanceMoney>
            </ContainerBalance>
            <LastMovimentationTitle>Ultimas movimentações</LastMovimentationTitle>
            <List 
                data={transactions}
                keyExtractor={transaction => transaction?.key}
                renderItem={({ item }) => ( <TransactionItem data={item}/>)}
            />
        </Background>
    )
}