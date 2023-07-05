import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabLeftScreen from '../screens/TabLeftScreen';
import TabMiddleScreen from '../screens/TabMiddleScreen';
import TabRightScreen from '../screens/TabRightScreen'

/**
 * A bottom tab navigator for the main three tabs/pages
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Middle"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Left"
        component={TabLeftScreen}
        options={{
          title: 'Left',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Middle"
        component={TabMiddleScreen}
        options={{
          title: 'Middle',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Right"
        component={TabRightScreen}
        options={{
          title: 'Right',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}