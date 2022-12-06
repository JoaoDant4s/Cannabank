import { Button, Snackbar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { AreaInput, Background, Container, Input, LogoTitle, SubmitButton, SubmitText, CreateAccountButton, CreateAccountText } from "./styles";

export default function Login() {
    const [nome, setNome] = useState("")
    const [password, setPassword] = useState("")
    const [snackbarVisible, setSnackbarVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const { setUser } = useContext(AuthContext)

    const navigateTo = useNavigation()

    const handleCloseSnackbar = () => {
        setSnackbarVisible(false)
        setErrorMessage("")
    }

    const handlePassword = (password) => {
        setPassword(password)
        handleCloseSnackbar()
    }
    const handleSubmitLogin = async () => {
        let errorOnSignin = false
        let respostaLogin = {}

        await fetch("http://10.0.2.2:8080/cannabank/auth/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: nome,
                password
            })
        }).then((response) => response.json())
        .then((response) => {
            respostaLogin = response
            if(respostaLogin?.status){
                errorOnSignin = true
            }
        })

        if(errorOnSignin){
            respostaLogin.error.includes("Un") ? setErrorMessage("Email ou senha inválido") : setErrorMessage("Ocorreu um erro inesperado")
            setSnackbarVisible(true)
            return
        }

        const user = await fetch("http://10.0.2.2:8080/cannabank/home")
        .then((res) => {
            return res.json()
        })
        .catch((err) => console.log(err))
        console.log(user)
        setUser(user)
    }

    return (
        <Background>
            <Container>
                <LogoTitle>Cannabank</LogoTitle>
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setNome(value)}
                        error={errorMessage}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(value) => handlePassword(value)}
                        error={errorMessage}
                    />
                </AreaInput>
                <SubmitButton onPress={handleSubmitLogin}>
                    <SubmitText>Entrar</SubmitText>
                </SubmitButton>
                <CreateAccountButton onPress={() => navigateTo.navigate('Register')}>
                    <CreateAccountText>Não tem cadastro? crie uma conta!</CreateAccountText>
                </CreateAccountButton>
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
        </Background>
    )
}