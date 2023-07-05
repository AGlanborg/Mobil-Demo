import { Text, View } from '../components/Themed';
import { general, typography } from '../styles';

export default function LoginScreen() {
  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>Login plz</Text>
    </View>
  )
}