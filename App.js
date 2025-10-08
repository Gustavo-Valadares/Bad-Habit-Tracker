import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, Pressable, Modal } from 'react-native';
import { SafeAreaView, SafeAreaProvider, } from 'react-native-safe-area-context';
import React, {useState} from 'react';

import AddModal from './src/components/MenusModais';

export default function App() {
  
  const Default_Habits = [

  ]

  const [ListaDeHabitos, setListaDeHabitos] = useState(Default_Habits); //vairável useState para a list de ListaDeHabitos

  //const [novoHabito, setNovoHabito] = useState(''); // variável para setar um novo habito

  const [modalVisivel, setModalVisivel] = useState(false); //variável useState do modal que controla o aparecimento do modal

  const adicionarHabito = (nomeHabito) => {
    if(nomeHabito.trim() === ''){ //.thim() é um método que tira espaços antes e depois da string. se não há nenhum caracter além de espaço irá ser uma string vazia (tratamento de excessão)
      Alert.alert("Digite o nome do hábito para adicioná-lo")
      return;
    }

    const novoItem = {
      id: String(Date.now()), // gera um id único para cada hábito
      nome: nomeHabito,
      count: 0,
    }

    setListaDeHabitos([...ListaDeHabitos, novoItem]); //...ListadeHabitos cria uma nova lista com o hábito antigos e adiciona novoItem a ele

    //setNovoHabito(''); // limpa o campo de input

    setModalVisivel(false); // fecha o modal
  };

  const deletaHabito = (idHabito) => {
    const novaLista = ListaDeHabitos.filter(habito => habito.id !== idHabito); // .filte vai criar outra lista com todos os habitos menos do que foi deletado por id

    setListaDeHabitos(novaLista);
  }

  const renomeiaHabito = (idHabito, novo) => {
    
  }


  const itemRender = ({item}) => ( // função que rederiza os itens do flatList
    <View style={styles.habitBox}>
      <Text style={styles.item}>{item.nome}: {item.count}</Text>

      <View style={styles.habitButtonsBox}>
        <Pressable
          OnPress={() => renomeiaHabito(item.id)}
        >
          <Text style={styles.updateButton}>U</Text>   
        </Pressable>

        <Pressable
          style={{color: 'red'}}
          onPress={() => deletaHabito(item.id)}
        >
          <Text style={styles.deleteButton}>X</Text>
        </Pressable>
        </View>
    </View>
  );

  return (
  <SafeAreaProvider>
    <SafeAreaView style={{flex: 1, backgroundColor: '#def1e8ff'}}> {/*necessário colocar a tag view para implemetar o botão absoluto da págia (bot~
    ao de adicionar novo item na lista)*/}
        <View style={styles.container}>

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
            <AddModal
              visible={modalVisivel}
              onClose={() => setModalVisivel(false)}
              onSubmit={adicionarHabito}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
 
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

  habitBox: {
    paddingBottom: 40,
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

  habitButtonsBox: {
    borderWidth: 0,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  updateButton: {
    justifyContent: 'center',
    alignItems:'center',
    color: '#2314ccff',
    borderWidth: 1.5,
    borderColor: '#2314ccff',
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 2, 
    fontSize: 16,
    marginRight: 16,
  },

  item: {
    color: 'black',
  },

  textStyle: {
    color: '#ebebebff',
    fontSize: 25,
    backgroundColor: '#302d2dff',
    paddingTop: 15,
    paddingBottom: 8,
    paddingLeft: 10,
    
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
