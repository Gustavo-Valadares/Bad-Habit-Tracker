import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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
    <View style={styles.container}> {/*necessário colocar a tag view para implemetar o botão absoluto da págia (bot~
    ao de adicionar novo item na lista)*/}
        <SafeAreaView style={styles.container}>

          <Text style={styles.textStyle}>Bad Habit Tracker</Text>
            <FlatList style={styles.listContainer}
              data={Habitos}
              renderItem={itemRender}
              keyExtractor={item => item.id}
          />
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

  container: {
    flex: 1,
    backgroundColor: '#565050ff',
    boderWidth: 1,
    borderColor: 'black',
    
  },
});
