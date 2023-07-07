import { Text, View } from "../components/Themed";
import { general, typography } from "../styles";

/**
 * Right most tab in "navigation/MainTabs"
 *
 * Displays the user's Favorite number
 */
export default function TabRightScreen(props: { favorite: number }) {
  return (
    <View style={[{ ...general.container }]}>
      <Text style={[{ ...typography.title }]}>My Favorite Number</Text>
      <Text style={[{ ...typography.title }]}>{Number.isNaN(props.favorite) ? '' : props.favorite}</Text>
    </View>
  );
}
