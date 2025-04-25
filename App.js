import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import TelaHome from './src/Pages/Home';
import TelaSuporte from './src/Pages/Suporte';
import TelaDePesquisa from './src/Pages/BarraPesquisa';
import TelaFobia from './src/Pages/ViewJogos/Fobia'; // <- AQUI

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Tabs(){
  return(
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: { backgroundColor: 'red' },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white'
      }}
    >
      <Tab.Screen 
        name='Feed' 
        component={TelaHome} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={require('./assets/home.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name='Suporte' 
        component={TelaSuporte}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={require('./assets/suporte.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name='Pesquisa' 
        component={TelaDePesquisa}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={require('./assets/lupa.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name='Suporte' component={TelaSuporte} />
        <Stack.Screen name='TelaFobia' component={TelaFobia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
