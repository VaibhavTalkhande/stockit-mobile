import { Slot } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
export default function AuthLayout() {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? '#f1f1f1' : '#fff' }}>
      <Slot />
      {/* The Slot component renders the current route's content */}
    </View>
  );
}


