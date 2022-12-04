import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { SafeAreaView} from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { ContainerInfo, Welcome } from '../Home/styles';
import { Background, Input, SubmitButton, SubmitText } from '../Login/styles';
import { TitleTransaction, BalanceTransaction } from './styles';

export default function Transactions() {
  const [ value, setValue ] = useState(0)
  const [ account, setAccount] = useState(0)
  const [ description, setDescription] = useState("")
  const { user } = useContext(AuthContext)
  const navigateTo = useNavigation()

  const handleContinue = () => {
    console.log(value)
    console.log(account)
    console.log(description)
    navigateTo.navigate('TransactionsStep2', {
      value,
      account,
      description
    })
  }
  return (
    <Background>
      <ContainerInfo>
        <Welcome>Transferência</Welcome>
      </ContainerInfo>
      <SafeAreaView style={{ alignItems: "center"}}>
        <TitleTransaction>Qual valor você deseja transferir?</TitleTransaction>
        <BalanceTransaction>Saldo: R$ {user?.balance}</BalanceTransaction>
        <Input
          placeholder="R$ 0,00"
          autoCorrect={false}
          autoCapitalize="none"
          value={value}
          underlineColorAndroid="transparent"
          onChangeText={(value) => setValue(value)}
        />
        <Input
          placeholder="Digite o número da conta"
          autoCorrect={false}
          autoCapitalize="none"
          value={account}
          underlineColorAndroid="transparent"
          onChangeText={(value) => setAccount(value)}
        />
        <Input
          placeholder="Descrição (opcional)"
          autoCorrect={false}
          autoCapitalize="none"
          value={description}
          underlineColorAndroid="transparent"
          onChangeText={(value) => setDescription(value)}
        />
        <SubmitButton onPress={handleContinue}>
          <SubmitText>
            Continuar
          </SubmitText>
        </SubmitButton>
      </SafeAreaView>
    </Background>
  );
}
