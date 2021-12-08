import * as React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';


export default function Home({navigation}) {

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  }

  return (
    <View style={styles.main}>
      <View  style={styles.logo}>
        <Image source={require('../assets/logo.png')} />
      </View>
      <Text style={styles.paragraph}>Klima</Text>
      
      <View style={styles.button}>
        <Button
          color = '#FCA311'
          onPress = {()=> {entrar()}}
          title="Entrar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    paddingTop: 40,
    width: '100%',
    textAlign: 'center',
    position: 'fixed',
    bottom: 54,
    width: '100%',
  },
  main:{
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  },
  logo:{
    height: 128,
    width: 128,
    top: '20px'
  },
  paragraph: {
    margin: 24,
    marginTop: 160,
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});
