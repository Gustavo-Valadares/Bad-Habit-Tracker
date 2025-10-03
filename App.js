import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable, Modal } from 'react-native';
import { SafeAreaView, ListRenderItemInfo } from 'react-native-safe-area-context';
import React, {useState} from 'react';

export default function App() {
  
    // type Habito{
  //   id: String,
  //   habito: String,
  //   count: int
  // }
  
  const Default_Habits = [
    {id: "1", nome: `Hábito`, count: 0},
    {id: "2", nome: "Hábito", count: 0},
    {id: "3", nome: "Hábito", count: 0},
    {id: "4", nome: "Hábito", count: 0},
    {id: "5", nome: "Hábito", count: 0},
    {id: "6", nome: "Hábito", count: 0},
    {id: "7", nome: "Hábito", count: 0},
    {id: "8", nome: "Hábito", count: 0},
    {id: "9", nome: "Hábito", count: 0},
    {id: "10", nome: "Hábito", count: 0},
    {id: "11", nome: "Hábito", count: 0},
    {id: "12", nome: "Hábito", count: 0},
    {id: "13", nome: "Hábito", count: 0},
    {id: "14", nome: "Hábito", count: 0},
    {id: "15", nome: "Hábito", count: 0},

    /*
    {id: "1", nome: "Comi Fritura", count: 0},
    {id: "2", nome: "Pulei Refeição", count: 0},
    {id: "3", nome: "Comi Doce", count: 0},
    {id: "4", nome: "Faltei Academia", count: 0},
    */
  ]

  const [Habitos, setHabitos] = useState(Default_Habits); //vairável useState 

  const [modalVisivel, setModalVisivel] = useState(false); //variável useState do modal que controla o aparecimento do modal

  const itemRender = ({item}) => (
    <View style={styles.itens}>
      <Text style={styles.item}>{item.nome} {item.id}: {item.count}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}> {/*necessário colocar a tag view para implemetar o botão absoluto da págia (bot~
    ao de adicionar novo item na lista)*/}
        <SafeAreaView style={styles.container}>
          
          <View style={{}}>
            <Modal 
              visible={modalVisivel}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setModalVisivel(false)} // permite fechar o menu modal com o borão voltar do android
            > 

            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                  <Text style={{color: 'white', alignSelf: 'center'}}> Menu Modal Aqui</Text>

                <Pressable 
                  style={styles.closeModalButton}
                  onPress={() => setModalVisivel(false)}
                >
                  <Text style={{color: 'red'}}>Fechar</Text>
                </Pressable>

              </View>
            </View>


            </Modal>
          </View>


          <Text style={styles.textStyle}>Bad Habit Tracker</Text>
            <FlatList style={styles.listContainer}
              data={Habitos}
              renderItem={itemRender}
              keyExtractor={item => item.id}
          />

          <Pressable style={styles.openModalButton}
            onPress={() => setModalVisivel(true)}
          >
            <Text style={{ fontSize: 40, color: 'green'}}>+</Text>
          </Pressable>

          <Pressable style={styles.update}
            onPress={() => setHabitos(Default_Habits)}
          >
            <Text>Atualizar Lista</Text>
          </Pressable>
        <StatusBar style="auto" /> {/*controla a barra de status nativa do dispositivo (Hora, Nível da bateria, Sinal de Wi-Fi e de rede celular, Ícones de notificação) */}

      </SafeAreaView>
    </View>
 
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#8d3535ff',
    boderWidth: 1,
  
  },

  listContainer: {
    color: 'white',
    backgroundColor: '#9c9797ff',
    paddingHorizontal: 50,
  },

  itens: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft:10,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center'
  },

  item: {
    color: 'black',
  },

  textStyle: {
    color: 'white',
    fontSize: 25,
    backgroundColor: '#302d2dff',
    paddingTop: 15,
    paddingBottom: 8,
    paddingLeft: 10,
    
  },

  modalContent: {
    width: '80%',
    backgroundColor: 'black',
    opacity: 0.85,
    paddingHorizonal: 50,
    paddingBottom: 50,
    magin: 40,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeModalButton: {
    justifyContent: 'right',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 25,
    marginTop: 35,
    alignItems: 'center',

  },

  openModalButton: {
    position: 'absolute',
    padding: 5,
    paddingHorizontal: 20,
    right: 60,
    bottom: 100,
    borderWidth: 5,
    borderRadius: 40,
    borderColor: 'green',
  },

  update: {
    position: 'absolute',
    right: 60,
    bottom: 50,
    borderWidth: 1,
    borderRadius: 25,
  },

  container: {
    flex: 1,
    backgroundColor: '#d0d0d0ff',
    boderWidth: 1,
    borderColor: 'black',
    
  },
});
