import { router } from "expo-router";
import { AuthForm } from "@/components/AuthForm";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  return (<AuthForm title="Register" />);
}
// This file is used for the registration screen in the app.