import { Text, View } from '../components/Themed';
import { general, typography } from '../styles';

/**
 * Screen for loging in user
 */
export default function LoginScreen() {
  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>Login plz</Text>
    </View>
  )
}