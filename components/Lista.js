import React, { useState, useEffect } from 'react';
import { Text, TextInput, Button, View, StyleSheet, Image, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import database from '../config/firebaseConfig';
import app from '../config/firebaseConfig'
  

export default function Lista(navigation) {

const viewData = () => {
  var[objects, setObjects] = useState({})

  useEffect(() => {
database.ref('Tasks').on('value', snapshot =>{
if(snapshot.val()!=null)
setObjects({
...snapshot.val()
})
})
  }, [])
}


// useEffect(() =>{
//   firebase.database().ref("Tasks").on("value", snapshot => {
//     let studentlist = [];
//     snapshot.forEach(snap => {
//         // snap.val() is the dictionary with all your keys/values from the 'students-list' path
//         studentlist.push(snap.val());
//     });
//     this.setState({ studentslist: studentlist });
//   });
// }, [])

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  }
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    app
    .firestore()
    .collection('Tasks')
    .onS
  }, []);


  return (

    <View style={styles.main}>

        <View style={styles.container}>
          <DataTable>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>Nome</DataTable.Title>
              <DataTable.Title>Plano</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
              <DataTable.Title>Data</DataTable.Title>
            </DataTable.Header>
            {Object.keys(objects).map(id=>{
              return <Text>{objects[id.temperatura]}</Text>
            })}
            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell>John</DataTable.Cell>
              <DataTable.Cell>200 MB</DataTable.Cell>
              <DataTable.Cell>Finalizado</DataTable.Cell>
              <DataTable.Cell>10/10/2020</DataTable.Cell>
            </DataTable.Row>

          </DataTable>
    </View>
    
      <Icon
        style={styles.back}
        reverse
        color='#FCA311'
        name="arrow-back-outline"
        type='ionicon'
        onPress = {()=> {entrar()}}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  back:{
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
  main:{
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(360deg, #000000 0%, #14213D 100%)'
  },
});

