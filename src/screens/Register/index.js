import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText} from "../Login/styles";

export default function Register(){
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [RG, setRG] = useState("")

    const navigateTo = useNavigation()

    const handleContinue = () => {

        navigateTo.navigate('RegisterStep2', {
            name,
            cpf,
            email,
            password,
            RG
        })
    }
    return(
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
                        placeholder="CPF"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={cpf}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setCpf(value)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="RG"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={RG}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setRG(value)}
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
                <SubmitButton>
                    <SubmitText onPress={handleContinue}>Continuar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}