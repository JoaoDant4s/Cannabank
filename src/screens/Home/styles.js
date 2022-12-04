import styled from "styled-components"

export const ContainerInfo = styled.View`
    background-color: #10403B; 
`
export const Name = styled.Text`
    font-style: italic;
`
export const BalanceMoney = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
`
export const BalanceText = styled.Text`
    margin-top: 5px;
    font-size: 25px;
    color: #FFF;
`
export const Welcome = styled.Text`
    padding: 20px;
    font-size: 25px;
    color: #FFF;
`
export const ContainerBalance = styled.View`
    padding: 20px;
    margin-bottom: 25px;
`

export const LastMovimentationTitle = styled.Text`
    text-align: center;
    font-size: 20px;
    color: #A6BC09;
    font-weight: bold;
    text-shadow: 1px 1px 8px black;
    margin-bottom: 15px;
`

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color: #EEE;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 10px;
    margin-right: 10px;
`