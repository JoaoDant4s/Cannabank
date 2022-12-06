import { Button, Snackbar } from '@react-native-material/core'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/auth'
import { getAttBalanceUserForContext, userNameOrEmailUpdated } from '../../../helpers'
import { AreaInput, Background, Container, LogoTitle, SubmitButton, SubmitText } from '../../Login/styles'
import { InputRegister } from '../../Register/styles'

export default function EditAccount(){
    const { user, setUser } = useContext(AuthContext)
    
    const [name, setName] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [deposit, setDeposit] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const [snackbarVisible, setSnackbarVisible] = useState(false)

    const handleSubmit = async () => {
        const userUpdated = userNameOrEmailUpdated(user.email, email, user.username, name)
        if(deposit){
            await fetch("http://10.0.2.2:8080/cannabank/home/account/deposit", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    accountNumber: user.account.accountNumber,
                    balance: user.account.balance + parseInt(deposit),
                    id: user.account.id
                })
            })
            .catch(err => {
                console.log(err.messsage)
                setErrorMessage(err.message)
                setSnackbarVisible(true)
            })
            setErrorMessage("Valor depositado com sucesso")
            setSnackbarVisible(true)
            setUser(getAttBalanceUserForContext(user, deposit))
        }

        if(userUpdated){
            await fetch("http://10.0.2.2:8080/cannabank/home", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    account: {
                        accountNumber: user.account.accountNumber,
                        balance: user.account.balance,
                        id: user.account.id
                    },
                    email,
                    id: user.id,
                    password: user.password,
                    roles: user.roles,
                    transactions: user.transactions,
                    username: name
                })
            }).then(() => setUser(null))
            .catch(err => {
                console.log(err.messsage)
                setErrorMessage(err.message)
                setSnackbarVisible(true)
            })
        }
    }
    
    const handleCloseSnackbar = () => {
        setExistEmail(false)
        setExistUserName(false)
        setSnackbarVisible(false)
    }
    
  return (
    <Background>
            <Container>
                <LogoTitle>Editar Conta</LogoTitle>
                <AreaInput>
                    <InputRegister
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => setName(value)}
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
                    />
                </AreaInput>
                <AreaInput>
                    <InputRegister
                        placeholder="Depositar valor"
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        value={deposit}
                        onChangeText={(value) => setDeposit(value)}
                    />
                </AreaInput>
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
                <SubmitButton onPress={handleSubmit}>
                    <SubmitText>Salvar</SubmitText>
                </SubmitButton>
            </Container>
        </Background >
  )
}