import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Text, View } from '../components/Themed';
import { general, typography } from '../styles';

export default function ModalScreen() {
  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>Modal</Text>
      <View style={[{ ...general.separator }]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
