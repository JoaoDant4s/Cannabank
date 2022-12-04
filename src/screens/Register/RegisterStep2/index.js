import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth";
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText} from "../../Login/styles";

export default function RegisterStep2(props){
    const [city, setCity] = useState("")
    const [cep, setCep] = useState("")
    const [state, setState] = useState("")
    const [phone, setPhone] = useState("")
    const [born, setBorn] = useState("")

    const { setUser } = useContext(AuthContext)

    // useEffect(() => {
    //     setUser({ nome: "João"})
    // }, [])
    const handleSubmit = () => {

        let newUser = {
            cep: cep,
            cidade: city,
            cpf: props.route.params.cpf,
            dataNascimento: born,
            email: props.route.params.email,
            estado: state,
            nome: props.route.params.name,
            rg: props.route.params.RG,
            telefone: phone
        }
        fetch("http://10.0.2.2:8080/clientes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(() => {
            newUser['conta'] = {
                id: Math.floor(Math.random() * 100000),
                numeroConta: Math.floor(Math.random() * 100000),
                saldo: 0,
            }
            console.log(newUser.conta)
        })
        .catch((err) => console.log(err))


        fetch("http://10.0.2.2:8080/conta", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser.conta)
        }).then(() => {
            console.log("subi a conta")
            setUser(newUser.conta)
        })
        .catch((err) => console.log(err))

        fetch("http://10.0.2.2:8080/clientes")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    }
    return(
        <Background>
            <Container>
                <AreaInput>
                    <Input
                        placeholder="Data de nascimento"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={born}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setBorn(value)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Cidade"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={city}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setCity(value)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Estado"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={state}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setState(value)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="CEP"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={cep}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setCep(value)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Telefone"
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={phone}
                        onChangeText={(value) => setPhone(value)}
                    />
                </AreaInput>
                <SubmitButton>
                    <SubmitText onPress={handleSubmit}>Finalizar Cadastro</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}