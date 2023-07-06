import { useState } from 'react';
import { fetchSignInMethodsForEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { general, typography, form } from '../styles';
import { auth } from '../firebase';

/**
 * Screen for loging in user
 */
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    await fetchSignInMethodsForEmail(auth, email)
    .then(() => signIn())
    .catch(() => createUser())
  };
  
  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
    signIn()
  }

  async function signIn() {
    await signInWithEmailAndPassword(auth, email, password);
    navigation.navigate("Root");
  }

  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>Please Login</Text>
      <View style={[{ ...general.separator }]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Email</Text>
      <TextInput style={[{ ...form.input }]} placeholder="Enter email" onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput style={[{ ...form.input }]} placeholder="Enter password" onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}