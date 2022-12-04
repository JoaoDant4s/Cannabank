import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { AreaInput, Background, Container, Input, LogoTitle, SubmitButton, SubmitText, CreateAccountButton, CreateAccountText } from "./styles";

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user } = useContext(AuthContext)

    const navigateTo = useNavigation()

    const handleSubmit = () => {
       console.log( "nome " + user.name )
    }
    return(
        <Background>
            <Container>
                <LogoTitle>Cannabank</LogoTitle>
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
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                </AreaInput>
                <SubmitButton onPress={handleSubmit}>
                    <SubmitText>Entrar</SubmitText>
                </SubmitButton>
                <CreateAccountButton onPress={() => navigateTo.navigate('Register')}>
                    <CreateAccountText>Não tem cadastro? crie uma conta!</CreateAccountText>
                </CreateAccountButton>
            </Container>
        </Background>
    )
}