import { router } from "expo-router";
import React, { use } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { useColorScheme } from '../hooks/useColorScheme.web';


type AuthFormProps = {
    title : 'Login' | 'Register';
};
export function AuthForm({title}: AuthFormProps) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState(false);
    const handelSubmit = async()=>{
        setLoading(true);
        setError(null);
        setSuccess(false);
        console.log('Submitting form', { email, password });
        const endPoint = title === 'Login' ? '/login-mobile' : '/register';
        try{
            const response = await fetch(process.env.BACKEND_URL + endPoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (!response.ok) {
                const data = await response.json();
                setError(data.message || 'Something went wrong');
            } else {
                setSuccess(true);
            }
        } catch (error) {
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    }
  return (

    <View style={styles.authFormContainer}>
      <Text style={styles.authFormTitle}>{title}</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title={title} onPress={handelSubmit} disabled={loading} />
      {title === 'Login' && (
        <Text style={{ textAlign: 'center', marginTop: 20, color: '#333' }}>
          Already have an account? <Text onPress={() => router.push('/register')} style={{ color: 'blue' }}>Register</Text>
        </Text>
      )}
        {title === 'Register' && (
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#333' }}>
            Already have an account? <Text onPress={() => router.push('/login')} style={{ color: 'blue' }}>Login</Text>
            </Text>
        )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {success && <Text style={styles.successText}>Success!</Text>}
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
        color: 'blue',

    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: 15,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    successText: {
        color: 'green',
        marginTop: 10,
    },
})