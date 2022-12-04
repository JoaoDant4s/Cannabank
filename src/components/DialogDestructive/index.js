import { Button, Dialog, DialogActions, DialogContent, DialogHeader, Provider } from '@react-native-material/core'
import React from 'react'
import { Text, View } from 'react-native'
import { DialogContainer } from './styles'

export default function DialogDestructive(props){
    console.log(props)
  return (
    <Provider>
        <>
            <Dialog visible={props.visible} onDismiss={() => setVisible(false)}>
                <DialogHeader  title="Tem certeza que deseja excluir a sua conta?" style={{marginBottom: "30px"}}/>
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
                        onPress={() => props.setVisible(false)}
                    />
                </DialogActions>
            </Dialog>
        </>
    </Provider>
  )
}