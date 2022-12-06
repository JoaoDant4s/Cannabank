import { Button, Snackbar } from '@react-native-material/core';
import React, { useContext, useState } from 'react';
import { SafeAreaView} from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { addTransactionToListAndAttContext, getAttBalanceUserForContext } from '../../helpers';
import { ContainerInfo, Welcome } from '../Home/styles';
import { Background, SubmitButton, SubmitText } from '../Login/styles';
import { TitleTransaction, BalanceTransaction, InputTransaction } from './styles';

export default function Transactions() {
  const [ value, setValue ] = useState(0)
  const [ account, setAccount] = useState("")
  const [ description, setDescription] = useState("")
  const [ snackbarVisible, setSnackbarVisible ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState("")
  const { user, setUser } = useContext(AuthContext)
  const [ valueError, setValueError ] = useState(false)
  const [ accountNumberError, setAccountNumberError ] = useState(false)

  const handleCloseSnackbar = () => {
    setErrorMessage("")
    setSnackbarVisible(false)
    setValueError(false)
    setAccountNumberError(false)
  }

  const handleContinue = async () => {
    let responseTransaction = {}
    let error = ""
    await fetch("http://10.0.2.2:8080/cannabank/home/transaction", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: value,
        description,
        accountNumber: account
      })
    })
    .then(response => response.json())
    .then(response => {
      responseTransaction = response
    })
    .catch(err => error = err.message)

    if(error){
      if(error.includes("Insufficient")){
        setErrorMessage("Não há saldo suficiente")
        setValueError(true)
      } else {
        setErrorMessage("A conta informada não existe")
        setAccountNumberError(true)
      }
      console.log(error)
      setSnackbarVisible(true)
      return
    }

    console.log(responseTransaction)
    setAccount("")
    setValue(0)
    setDescription("")
    setErrorMessage("Transação concluída com sucesso")
    setSnackbarVisible(true)
    setUser(addTransactionToListAndAttContext(user, responseTransaction, -value))
  }

  const handleAccount = value => {
    setAccountNumberError(false)
    setAccount(value)
  }
  return (
    <Background>
      <ContainerInfo>
        <Welcome>Transferência</Welcome>
      </ContainerInfo>
      <SafeAreaView style={{ alignItems: "center"}}>
        <TitleTransaction>Qual valor você deseja transferir?</TitleTransaction>
        <BalanceTransaction>Saldo: R$ {user?.account.balance}</BalanceTransaction>
        <InputTransaction
          placeholder="R$ 0,00"
          autoCorrect={false}
          autoCapitalize="none"
          value={value}
          underlineColorAndroid="transparent"
          onChangeText={(value) => setValue(value)}
          valueError={valueError}
        />
        <InputTransaction
          placeholder="Digite o número da conta"
          autoCorrect={false}
          autoCapitalize="none"
          value={account}
          underlineColorAndroid="transparent"
          onChangeText={(value) => handleAccount(value)}
          accountNumberError={accountNumberError}
        />
        <InputTransaction
          placeholder="Descrição (opcional)"
          autoCorrect={false}
          autoCapitalize="none"
          value={description}
          underlineColorAndroid="transparent"
          onChangeText={(value) => setDescription(value)}
          multiline={true}
          numberOfLines={4}
        />
        <SubmitButton onPress={handleContinue}>
          <SubmitText>
            Continuar
          </SubmitText>
        </SubmitButton>
      </SafeAreaView>
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
    </Background>
  );
}
