import { Text, View } from '../components/Themed';
import { general, typography } from '../styles';

/**
 * Right most tab in "navigation/MainTabs"
 * 
 * Displays the user's Favorite number
 */
export default function TabRightScreen() {
  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>Your Favorite Number</Text>
      <View style={[{ ...general.separator }]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={[{ ...typography.title }]}>3</Text>
    </View>
  );
}
