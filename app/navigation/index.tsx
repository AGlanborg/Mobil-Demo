/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/LoginScreen'
import BottomTabNavigator from './MainTabs';

type typeFavorite = {
  favorite: number,
  setFavorite: React.Dispatch<React.SetStateAction<number>>
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [favorite, setFavorite] = React.useState<number>(NaN)

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator favorite={favorite} setFavorite={setFavorite} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(props: typeFavorite) {
  let page;

  if (Number.isNaN(props.favorite)) {
    page = <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
  } else {
    page = <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
  }

  return (
    <Stack.Navigator>
      { page }
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
