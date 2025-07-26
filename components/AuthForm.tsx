import { StyleSheet, Text, View } from "react-native";

export function AuthForm({Title }: {Title: string}) {
  return (
    <View style={styles.authFormContainer}>
      <Text style={styles.authFormTitle}>{Title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    authFormContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    authFormTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})