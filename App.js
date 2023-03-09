import { StatusBar } from 'expo-status-bar';
import { Button} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  function clickHandler(){
    alert('Hi');
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView >
      <Text>Hello There!</Text>
      <StatusBar style="auto" />
      <Button title='Click me' onPress={clickHandler}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
