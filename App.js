import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList, Alert, Pressable, Modal } from 'react-native';
import { SafeAreaView, ListRenderItemInfo } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  
  const Default_Habits = [


  ]

  const [ListaDeHabitos, setListaDeHabitos] = useState(Default_Habits); //vairável useState para a list de ListaDeHabitos

  const [novoHabito, setNovoHabito] = useState(''); // variável para setar um novo habito

  const [modalVisivel, setModalVisivel] = useState(false); //variável useState do modal que controla o aparecimento do modal

  const adicionarHabito = () => {
    if(novoHabito.trim() === ''){ //.thim() é um método que tira espaços antes e depois da string. se não há nenhum caracter além de espaço irá ser uma string vazia (tratamento de excessão)
      Alert.alert("Digite o nome do hábito para adicioná-lo")
      return;
    }

    const novoItem = {
      id: String(Date.now()), // gera um id único para cada hábito
      nome: novoHabito,
      count: 0,
    }

    setListaDeHabitos([...ListaDeHabitos, novoItem]); //...ListadeHabitos cria uma nova lista com o hábito antigos e adiciona novoItem a ele

    setNovoHabito(''); // limpa o campo de input

    setModalVisivel(false); // fecha o modal
  };

  const deletaHabito = (idDelete) => {
    const novaLista = ListaDeHabitos.filter(habito => habito.id !== idDelete); // .filte vai criar outra lista com todos os habitos menos do que foi deletado por id

    setListaDeHabitos(novaLista);
  }


  const itemRender = ({item}) => ( // função que rederiza os itens do flatList
    <View style={styles.habitBox}>
      <Text style={styles.item}>{item.nome}: {item.count}</Text>

      <Pressable
        style={{color: 'red'}}
        onPress={() => deletaHabito(item.id)}
      >
        <Text style={styles.deleteButton}>X</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#def1e8ff'}}> {/*necessário colocar a tag view para implemetar o botão absoluto da págia (bot~
    ao de adicionar novo item na lista)*/}
        <SafeAreaView style={styles.container}>

            <View> 
              {/* Header */}
                <Text style={styles.textStyle}>Bad Habit Tracker</Text> 
            </View>
            
              <Text style={{color: '#17c677ff', fontSize: 20, alignSelf: 'center', marginTop: 12, margin: 8}}>Meus Hábitos</Text>
              <FlatList style={styles.listContainer}
                data={ListaDeHabitos}
                renderItem={itemRender}
                keyExtractor={item => item.id}
            />

            <Pressable style={styles.openModalButton}
              onPress={() => setModalVisivel(true)}
            >
              <Text style={{ fontSize: 40, color: '#0b4d3eff'}}>+</Text>
            </Pressable>

            <Pressable style={styles.update}
              onPress={() => setListaDeHabitos(Default_Habits)}
            >
              <Text>Atualizar Lista</Text>
            </Pressable>
          <StatusBar style="auto" /> {/*controla a barra de status nativa do dispositivo (Hora, Nível da bateria, Sinal de Wi-Fi e de rede celular, Ícones de notificação) */}



          <View style={{}}>
            <Modal 
              visible={modalVisivel}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setModalVisivel(false)} // permite fechar o menu modal com o borão voltar do android
            > 

            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                  <Text style={{color: '#ebebebff', alignSelf: 'center', marginBottom: 20, marginTop: 10, fontSize: 16}}> Adicionar Hábito Novo</Text>

                  <TextInput
                    style={styles.newHabitInput}
                    placeholder="Ex: Comer doce"
                    placeholderTextColor='#a4a4a46e'
                    value={novoHabito}
                    onChangeText={setNovoHabito}
                  >
                  </TextInput>
                
                  <View style={{flexDirection: 'row', borderWidth: 0, borderColor: 'yellow', alignSelf: 'center', marginTop: 15, paddingHorizontal: 10,}}>
                    <Pressable 
                      style={styles.closeModalButton}
                      onPress={() => setModalVisivel(false)}
                    >
                      <Text style={{color: 'white', padding: 5, paddingHorizontal: 10}}>Cancelar</Text>
                    </Pressable>

                    <Pressable 
                      style={styles.confirmModalButton}
                      onPress={() => adicionarHabito()}
                    >
                      <Text style={{color: 'white'}}>Adicionar</Text>
                    </Pressable>
                    
                  </View>
              </View>
            </View>

            </Modal>
          </View>
        </SafeAreaView>
      </View>
 
// cores interessantes: #D3D3D3, #81B29A, #FAF8F5 (tons claros de azul e verde)

  );
}

const styles = StyleSheet.create({

  listContainer: {
    color: 'white',
    backgroundColor: '#81B29A',
    paddingHorizontal: 50,
    paddingTop: 50,
    borderWidth: 1,
    borderColor: 'black',
  },

  habitBox: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 16,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 14,
    justifyContent: 'space-between',
    marginBottom: 36,
    backgroundColor: '#8393dbff',
    flexDirection: 'row',

  },

  item: {
    color: 'black',
    
  },


  deleteButton: {
    justifyContent: 'center',
    alignItems:'center',
    color: '#cc1414ff',
    borderWidth: 1.5,
    borderColor: '#cc1414ff',
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 2, 
    fontSize: 16,
    marginRight: 16,
  },

  textStyle: {
    color: '#ebebebff',
    fontSize: 25,
    backgroundColor: '#302d2dff',
    paddingTop: 15,
    paddingBottom: 8,
    paddingLeft: 10,
    
  },

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

  openModalButton: {
    position: 'absolute',
    padding: 2,
    paddingHorizontal: 16,
    right: 60,
    bottom: 100,
    borderWidth: 5,
    borderRadius: 40,
    borderColor: '#0b4d3eff',
  },

  newHabitInput: {
    borderWidth: 1,
    borderColor: '#c0c0c0ff',
    borderRadius: 10,
    color: '#c0c0c0ff',
    marginHorizontal: 20,
    marginBottom: 24,
    paddingLeft: 12,

    
  },

  update: {
    position: 'absolute',
    right: 60,
    bottom: 50,
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#0b4d3eff',
    borderColor: 'black',
    
  },
});
