import styled from "styled-components";

export const Background = styled.View`
    flex: 1;
    background-color: #348888;
`
export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const LogoTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 50px;
    color: #A6BC09;
`
export const AreaInput = styled.View`
    flex-direction: row;
`

export const Input = styled.TextInput.attrs({
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
`

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #A6BC09;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 10px;
`
export const SubmitText = styled.Text`
    color: #10403B;
    font-size: 18px;
    font-weight: bold;
`
export const CreateAccountButton = styled.TouchableOpacity`
    flex-direction: row;
`

export const CreateAccountText = styled.Text`
    color: #FFF;
    font-weight: bold;
    margin-left: 5px;
`
