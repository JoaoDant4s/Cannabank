import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from "../Login/styles";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(AuthContext)

    const navigateTo = useNavigation()

    const handleSubmit = () => {
        fetch("http://10.0.2.2:8080/cannabank/home").then((response) => response.json())
            .then((response) => {
                console.log(response)
            }).catch((err) => console.log(err))

    }


    return (
        <Background>
            <Container>
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setName(value)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setEmail(value)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Senha"
                        type="password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                </AreaInput>
                <SubmitButton onPress={handleSubmit}>
                    <SubmitText >Finalizar Cadastro</SubmitText>
                </SubmitButton>
            </Container>
        </Background >
    )
}