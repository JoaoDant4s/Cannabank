import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import DialogDestructive from '../../components/DialogDestructive';
import { Background } from '../Login/styles';
import { ConfigTitle, DeleteButton, EditButton, LogoutButton, LogoutText } from './styles';

export default function AccountConfig() {
  const navigateTo = useNavigation()
  const [visible, setVisible] = useState()

  return (
    <Background style={{justifyContent: "center"}}>
      <View style={{alignItems: "center"}}>
        <ConfigTitle>Configurações</ConfigTitle>
        <EditButton>
          <LogoutText onPress={() => navigateTo.navigate('EditAccount')}>Editar perfil</LogoutText>
        </EditButton>
        <LogoutButton 
          onPress={() => setVisible(true)}
          style={{backgroundColor: "red"}}
        >
          <LogoutText style={{color: "#FFF"}}>Sair</LogoutText>
        </LogoutButton>
        <DeleteButton style={{backgroundColor: "red"}}>
          <LogoutText style={{color: "#FFF"}}>Deletar conta</LogoutText>
        </DeleteButton>
      </View>
      {visible && (
          <DialogDestructive 
            visible={visible} 
            setVisible={setVisible}
          />
        )}
    </Background>
  );
}
