import { Text, View } from '../components/Themed';
import { general, typography } from '../styles';

/**
 * Middle tab in "navigation/MainTabs"
 * 
 * Displays the user's Favorite number and allows the user to alter favorite number
 */
export default function TabMiddleScreen() {
  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>My Favorite Number</Text>
      <View style={[{ ...general.separator }]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={[{ ...typography.title }]}>3</Text>
    </View>
  );
}