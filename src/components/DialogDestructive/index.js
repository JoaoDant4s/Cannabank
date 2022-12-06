import { Button, Dialog, DialogActions, DialogContent, DialogHeader, Provider } from '@react-native-material/core'
import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { AuthContext } from '../../contexts/auth'

export default function DialogDestructive(props){
    const [modalMessage, setModalMessage] = useState("")
    const { setUser } = useContext(AuthContext)
    useEffect(() => {
        if(props.deleteAccount){
            setModalMessage("Tem certeza que deseja excluir a sua conta?")
        } else {
            setModalMessage("Deseja sair?")
        }
    }, [])

    const handleClick = async () => {
        if(modalMessage.includes("sair")){
            await fetch("http://10.0.2.2:8080/cannabank/auth/signout", {
                method: "POST"
            })
            .catch(err => console.log(err))
        }

        setUser(null)
    }
  return (
    <Provider>
        <>
            <Dialog visible={props.visible} onDismiss={() => props.setVisible(false)}>
                <DialogHeader  title={modalMessage} style={{marginBottom: "30px"}}/>
                <DialogContent>
                    {/* <Text>
                        Tem certeza que deseja excluir a sua conta?
                    </Text> */}
                    <View style={{flex: 1, brackgroundColor: "red"}}>

                    </View>
                </DialogContent>
                <DialogActions>
                    <Button
                        title="Não"
                        compact
                        variant="text"
                        onPress={() => props.setVisible(false)}
                    />
                    <Button
                        title="Sim"
                        compact
                        variant="text"
                        onPress={handleClick}
                    />
                </DialogActions>
            </Dialog>
        </>
    </Provider>
  )
}