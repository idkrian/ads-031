import * as React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }]
    })
  }

  return (
    <LinearGradient style={styles.gradient} colors={['#14213D', 'black']}>
      <View style={styles.main}>
        <View style={styles.logoDiv}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        
        <Text style={styles.paragraph}>Klima</Text>

        <View style={styles.button}>
          <Button
            color='#FCA311'
            onPress={() => { entrar() }}
            title="Entrar"
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: '100%'
  },
  logoDiv: {
    textAlign: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 228,
    width: 228,
    top: '0px',
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    paddingTop: 40,
    width: '100%',
    textAlign: 'center',
    position: 'fixed',
    bottom: 54,
    width: '100%',
  },
  main: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  logo: {
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
