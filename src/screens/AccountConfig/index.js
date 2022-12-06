import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View} from 'react-native';
import DialogDestructive from '../../components/DialogDestructive';
import { Background } from '../Login/styles';
import { ConfigTitle, DeleteButton, EditButton, LogoutButton, LogoutText } from './styles';

export default function AccountConfig() {
  const navigateTo = useNavigation()
  const [visible, setVisible] = useState()
  const [deleteAccount, setDeleteAccount] = useState(null)

  const handleClick = deleteAcc => {
    setDeleteAccount(deleteAcc)
    setVisible(true)
  }
  return (
    <Background style={{justifyContent: "center"}}>
      <View style={{alignItems: "center"}}>
        <ConfigTitle>Configurações</ConfigTitle>
        <EditButton>
          <LogoutText onPress={() => navigateTo.navigate('EditAccount')}>Editar perfil</LogoutText>
        </EditButton>
        <LogoutButton 
          onPress={() => handleClick(false)}
          style={{backgroundColor: "red"}}
        >
          <LogoutText style={{color: "#FFF"}}>Sair</LogoutText>
        </LogoutButton>
        <DeleteButton 
          style={{backgroundColor: "red"}}
          onPress={() => handleClick(true)}
        >
          <LogoutText style={{color: "#FFF"}}>Deletar conta</LogoutText>
        </DeleteButton>
      </View>
      {visible && (
          <DialogDestructive 
            visible={visible} 
            setVisible={setVisible}
            deleteAccount={deleteAccount}
          />
        )}
    </Background>
  );
}
