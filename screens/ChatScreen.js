import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useCallback } from "react";
import backgroundImage from "../assets/images/chatbg.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import color from "../constants/color";
export default function ChatScreen(props) {
  const [message, setMessage] = useState("");
  const sendMessage = useCallback(() => {
    setMessage("");
  }, [message]);

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS ==="ios" ? "padding" : undefined} keyboardVerticalOffset={100}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      ></ImageBackground>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textbox}
          placeholder="Message"
          placeholderTextColor={color.gray}
          value={message}
          multiline={true}
          onChangeText={(text) => {
            setMessage(text);
          }}
        />
        <TouchableOpacity style={styles.mediaButton}>
          <Entypo name="attachment" size={20} color={color.gray} />
        </TouchableOpacity>
        {message === "" ? (
          <TouchableOpacity style={styles.mediaButton}>
            <FontAwesome name="camera" size={20} color={color.gray} />
          </TouchableOpacity>
        ) : (
          <View style={styles.mediaButton2}></View>
        )}
        {message === "" ? (
          <TouchableOpacity style={styles.microphone}>
            <MaterialCommunityIcons name="microphone" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.microphone} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        )}
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 1,
    height: 60,
    width: "120%",
    position: "absolute",
    bottom: 0,
    marginLeft: -10,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: color.gray,
    marginHorizontal: 15,
    paddingHorizontal: 12,
    backgroundColor: color.insidemessage,
    color: "white",
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    position: "relative",
    right: 90,
  },
  mediaButton2: {
    width: 35,
  },
  microphone: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    position: "relative",
    right: 77,
    borderRadius: 100,
    backgroundColor: color.lightgreen,
    paddingHorizontal: 2,
  },
});
