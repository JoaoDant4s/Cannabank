import { Button, Snackbar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { AreaInput, Background, Container, LogoTitle, SubmitButton, SubmitText } from "../Login/styles";
import { InputRegister } from "./styles";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    //feedbacks UX
    const [existEmail, setExistEmail] = useState(false)
    const [passwordNotEqual, setPasswordNotEqual] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [existUserName, setExistUserName] = useState(false)
    const [snackbarVisible, setSnackbarVisible] = useState(false)

    const navigateTo = useNavigation()

    const handleSubmit = () => {
        if(password.localeCompare(confirmPassword) !== 0){
            setErrorMessage("As senhas informadas não são iguais")
            setPasswordNotEqual(true)
            setSnackbarVisible(true)
            return
        }
        fetch("http://10.0.2.2:8080/cannabank/auth/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name,
                password,
                email
            })
        }).then((response) => response.json())
            .then((response) => {
                console.log(response)
                navigateTo.navigate("Login")
            })
            .catch((err) => console.log(err.message))
    }

    const handleCloseSnackbar = () => {
        setExistEmail(false)
        setPasswordNotEqual(false)
        setExistUserName(false)
        setSnackbarVisible(false)
    }
    return (
        <Background>
            <Container>
                <LogoTitle>Cadastro</LogoTitle>
                <AreaInput>
                    <InputRegister
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setName(value)}
                        userNameTaken={existUserName}
                    />
                </AreaInput>
                <AreaInput>
                    <InputRegister
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setEmail(value)}
                        emailTaken={existEmail}
                    />
                </AreaInput>
                <AreaInput>
                    <InputRegister
                        placeholder="Senha"
                        secureTextEntry={true}
                        type="password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        passwordNotEqual={passwordNotEqual}
                    />
                </AreaInput>
                <AreaInput>
                    <InputRegister
                        placeholder="Confirmar senha"
                        secureTextEntry={true}
                        type="password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={confirmPassword}
                        onChangeText={(value) => setConfirmPassword(value)}
                        passwordNotEqual={passwordNotEqual}
                    />
                </AreaInput>
                <SubmitButton onPress={handleSubmit}>
                    <SubmitText >Finalizar Cadastro</SubmitText>
                </SubmitButton>
                {snackbarVisible && (<Snackbar 
                    message={errorMessage}
                    action={
                        <Button 
                            variant="text" 
                            title="FECHAR" 
                            color="#BB86FC" 
                            compact 
                            onPress={handleCloseSnackbar}
                        />}
                    style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
                />)}
            </Container>
        </Background >
    )
}