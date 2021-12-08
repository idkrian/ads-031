import React, { useState, useEffect } from 'react';
import { Text, TextInput, FlatList, Button, Pressable, View, StyleSheet, Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";



export default function Lista(navigation) {
  const viewData = () => {
    var [objects, setObjects] = useState({})

    useEffect(() => {
      database.ref('Tasks').on('value', snapshot => {
        if (snapshot.val() != null)
          setObjects({
            ...snapshot.val()
          })
      })
    }, [])
  }


  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }]
    })
  }

  const [dados, setDados] = useState([]);

  const Item = ({ item }) => {
    return (
      <View style={{ borderBottomWidth: 1, paddingVertical: 8 }}>
        <DataTable>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Clima</DataTable.Title>
            <DataTable.Title>Temperatura</DataTable.Title>
            <DataTable.Title>Data</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row style={styles.tableRow}>
            <DataTable.Cell>{item.clima}</DataTable.Cell>
            <DataTable.Cell>{item.temperatura}ºC</DataTable.Cell>
            <DataTable.Cell>{item.data}</DataTable.Cell>
          </DataTable.Row>

        </DataTable>
      </View>

  
    );
  };


  const firebaseConfig = {
    apiKey: "AIzaSyBKcT5KTgNNVkTRzEYLeqwy-4b0KQJORpo",
    authDomain: "trabalho-pi-2f683.firebaseapp.com",
    projectId: "trabalho-pi-2f683",
    storageBucket: "trabalho-pi-2f683.appspot.com",
    messagingSenderId: "85142818563",
    appId: "1:85142818563:web:4d7950924c42061842a336"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const tasks = [];
    firebase
      .firestore()
      .collection('Tasks')
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const { clima, temperatura, data } = doc.data();
          tasks.push({
            id: doc.id,
            clima: clima,
            temperatura: temperatura,
            data: data
          });
        });
        console.log(tasks)
        setDados([...tasks]);
      });
  }, []);

  return (

    <View style={styles.main}>

      <FlatList
        data={dados}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />

      <Icon
        style={styles.back}
        reverse
        color='#FCA311'
        name="arrow-back-outline"
        type='ionicon'
        onPress={() => { entrar() }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    position: 'fixed',
    bottom: 0,
  },
  tableRow: {
    backgroundColor: "white",
  },
  tableHeader: {
    backgroundColor: "#FCA311",
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  main: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  },
});

