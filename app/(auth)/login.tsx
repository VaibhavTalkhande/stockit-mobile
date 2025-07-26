import { AuthForm } from "@/components/AuthForm";
import { Link, router } from "expo-router";
import { View,Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (

        <AuthForm title="Login" />

  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 24,
//     marginBottom: 20,
//     color: 'blue',
//   },
// });