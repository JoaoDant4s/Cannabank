import styled from "styled-components";

export const Transaction = styled.View`
    flex-direction: row;
`
export const ContainerTransaction = styled.View`
    margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
`
export const Date = styled.Text`
    margin-right: 30px;
    font-size: 20px;
`
export const Type = styled.Text`
    font-size: 20px;
    color: #FFF;
`

export const ValueContainer = styled.View`
    justify-content: center;
`
export const TypeContainer = styled.View`
    margin-right: 30px;
    flex-direction: row;
    padding-left: 5px;
    padding-right: 15px;
    background-color: ${props => props.sender === props.userName ? "red" : "green"};
    border-radius: 7px;
`

export const ValueTransaction = styled.Text`
    font-size: 20px;
    font-weight: bold;
`