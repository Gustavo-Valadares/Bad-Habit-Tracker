import { StyleSheet, Text, TextInput, View, Pressable, Modal } from 'react-native';
import React, {useState} from 'react';


export default function AddModal({visible, onClose, onSubmit}) {

    const [inputText, setInputText] = useState('');

    const handleConfirm = () =>{
      onSubmit(inputText);
      setInputText(''); // esvazia o campo do texto
    }

    const handleClose = () =>{
      onClose();
      setInputText('');
    }

    return (
    <View style={{}}>
        <Modal 
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={handleClose} // permite fechar o menu modal com o borão voltar do android
        > 

        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={{color: '#ebebebff', alignSelf: 'center', marginBottom: 20, marginTop: 10, fontSize: 16}}> Adicionar Hábito Novo</Text>

                <TextInput
                style={styles.modalTextInput}
                placeholder="Ex: Comi Doce"
                placeholderTextColor='#a4a4a46e'
                value={inputText}
                onChangeText={setInputText}
                >
                </TextInput>
            
                <View style={{flexDirection: 'row', borderWidth: 0, borderColor: 'yellow', alignSelf: 'center', marginTop: 15, paddingHorizontal: 10,}}>
                <Pressable 
                    style={styles.closeModalButton}
                    onPress={handleClose}
                >
                    <Text style={{color: 'white', padding: 5, paddingHorizontal: 10}}>Cancelar</Text>
                </Pressable>

                <Pressable 
                    style={styles.confirmModalButton}
                    onPress={handleConfirm}
                >
                    <Text style={{color: 'white'}}>Adicionar</Text>
                </Pressable>
                
                </View>
            </View>
        </View>

        </Modal>
        </View>
    )
}



const styles = StyleSheet.create({

  modalContent: {
    width: '80%',
    backgroundColor: '#313131ff',
    opacity: 0.90,
    paddingHorizonal: 50,
    paddingBottom: 40,
    borderRadius: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  confirmModalButton: {
    borderWidth: 1, 
    borderColor: 'green', 
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 25,
    marginLeft: 60,
  },

  closeModalButton: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 25,
    marginRight: 60,

  },

  modalTextInput: {
    borderWidth: 1,
    borderColor: '#c0c0c0ff',
    borderRadius: 10,
    color: '#c0c0c0ff',
    marginHorizontal: 20,
    marginBottom: 24,
    paddingLeft: 12,
    
  },

});