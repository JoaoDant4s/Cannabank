import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { AreaInput, Background, Container, Input, LogoTitle, SubmitButton, SubmitText, CreateAccountButton, CreateAccountText } from "./styles";

export default function Login() {
    const [nome, setNome] = useState("")
    const [password, setPassword] = useState("")
    const { user } = useContext(AuthContext)

    const navigateTo = useNavigation()

    const handleSubmitLogin = () => {
        fetch("http://10.0.2.2:8080/cannabank/auth/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: nome,
                password: password
            })
        }).then((response) => response.json())
            .then((response) => {
                console.log(response)
                navigateTo.navigate("Home")
            })
            .catch((err) => console.log(err))
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
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                </AreaInput>
                <SubmitButton onPress={handleSubmitLogin}>
                    <SubmitText>Entrar</SubmitText>
                </SubmitButton>
                <CreateAccountButton onPress={() => navigateTo.navigate('Register')}>
                    <CreateAccountText>Não tem cadastro? crie uma conta!</CreateAccountText>
                </CreateAccountButton>
            </Container>
        </Background>
    )
}