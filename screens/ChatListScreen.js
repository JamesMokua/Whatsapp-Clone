import { Button, StyleSheet, Text, View } from 'react-native';
export default function ChatListScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title='Go to settings' onPress={() => {props.navigation.navigate('ChatSettings')} }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label:{
      fontSize: 20,
      fontFamily: "regular"
    }
  });
  