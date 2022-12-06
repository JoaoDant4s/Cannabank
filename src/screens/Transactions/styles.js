import styled from "styled-components";


export const TitleTransaction = styled.Text`
    font-size: 25px;
    color: #FFF;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 10px;
`
export const BalanceTransaction = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    color: #FFF;
    margin-bottom: 15px;
`
export const InputTransaction = styled.TextInput.attrs({
    placeholderTextColor: '#8AA6A3'
})`
    background-color: #10403B;
    width: 90%;
    font-size: 18px;
    color: #FFF;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 8px;
    height: 45px;
    border: ${props => props.valueError || props.accountNumberError ? "2px solid red" : "2px solid #10403B"};
`