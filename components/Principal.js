import React, { useState, useEffect } from 'react';
import { Text, TextInput, Button, View, StyleSheet, Image, FlatList } from 'react-native';
import database from '../config/firebaseConfig';

export default function Principal({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const listar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Lista" }]
    })
  }

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=brasilia&units=metric&APPID=a84fa02c10f107905f4968c8ec0bea59&lang=pt_br')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function saveWeather(temperatura, clima) {
    database.collection("Tasks").add({
      clima: clima,
      temperatura: temperatura,
      createdAt: database.firestore.FieldValue.serverTimestamp()
    })
    console.log(temperatura, clima, data)
  }

  return (

    <View style={styles.main}>
      <View>
        {isLoading ? <Text>Loading...</Text> :
          (<View >
            <View style={styles.logoDiv}>
              <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

            <Text style={styles.weather}>{data.name}</Text>
            <Text style={styles.weather}>{data.weather[0].description}</Text>
            <Text style={styles.weather}>{data.main.temp}ºC</Text>
            <View style={styles.button}>
              <Button
                color='#FCA311'
                onPress={() => { saveWeather(data.main.temp, data.weather[0].description) }}
                title="Salvar Temperatura"
              />
            </View>
          </View>
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'fixed',
    bottom: 54,
    width: '100%',
  },
  logoDiv: {
    textAlign: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 128,
    width: 128,
    top: '0px',
    textAlign: 'center',
    alignItems: 'center',
  },
  weather: {
    textTransform: 'capitalize',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  main: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(360deg, #000000 0%, #14213D 100%)'
  },
});
