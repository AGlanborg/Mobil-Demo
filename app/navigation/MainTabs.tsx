import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types";
import { auth } from "../firebase";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabLeftScreen from "../screens/TabLeftScreen";
import TabMiddleScreen from "../screens/TabMiddleScreen";
import TabRightScreen from "../screens/TabRightScreen";
import getNumber from "../requests/get/getNumber";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

/**
 * Main bottom tab navigator for the main three tabs/pages
 */
export default function BottomTabNavigator() {
  const [favorite, setFavorite] = React.useState<number>(NaN);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    favoriteInit();
  }, []);

  /**
   * Get favorite number from db and assign val to var "favorite"
   * If email of current user is assigned
   */
  async function favoriteInit() {
    if (typeof auth.currentUser?.email == "string") {
      const val = await getNumber(auth.currentUser?.email);

      setFavorite(val.FavoriteNumber_FavoriteNumber[0].number);
    }
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Middle"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Left"
        options={{
          title: "Left",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      >
        {() => <TabLeftScreen favorite={favorite} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Middle"
        options={{
          title: "Middle",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      >
        {() => (
          <TabMiddleScreen favorite={favorite} setFavorite={setFavorite} />
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Right"
        options={{
          title: "Right",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      >
        {() => <TabRightScreen favorite={favorite} />}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
