import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Favorites from './src/screens/Favorites';
import Payment from './src/screens/Payment';
import Setting from './src/screens/Setting';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const getTabBarLabel = (route, focused) => {
    let label;
    if (route.name === 'Home') {
      label = focused ? '홈' : '홈';
    } else if (route.name === 'Favorites') {
      label = focused ? '즐겨찾기' : '즐겨찾기';
    } else if (route.name === 'Payment') {
      label = focused ? '결제' : '결제';
    } else if (route.name === 'Setting') {
      label = focused ? '설정' : '설정';
    }
    return label;
  };

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
            justifyContent: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 5,
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            color = 'black';
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Payment') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return (
              <View style={{ width:50,alignItems: 'center' }}>
                <Ionic name={iconName} size={size} color={color} />
                <Text style={{ fontSize: 12, fontWeight: 'bold', color }}>{getTabBarLabel(route, focused)}</Text>
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Payment" component={Payment} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});