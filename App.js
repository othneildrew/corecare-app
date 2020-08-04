
import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import BottomTabBar from './components/BottomTabBar';

// Import stack screens
import { 
    MessageStackScreen,
    SearchStackScreen,
    HomeStackScreen,
    EarningStackScreen,
    ProfileStackScreen,
 } from './screens/StackScreens';

// Create tab navigator
const Tab = createBottomTabNavigator();


export default function App() {
    const [ fontsLoaded ] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (! fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBar={ (props) => <BottomTabBar {...props} /> }
            >

                <Tab.Screen name='Message'
                    component={ MessageStackScreen }
                    options={{
                        icon: { name: 'chat', width: 36, height: 24 }
                    }}
                    imageIcon={{
                        activePath: 'active path',
                        inactivePath: 'inactive',
                        size: { width: 21, height: 20 },
                    }}
                />

                <Tab.Screen name='Search'
                    component={ SearchStackScreen }
                    options={{
                        icon: { name: 'search', width: 21, height: 20 }
                    }}
                    imageIcon={{
                        activePath: 'active path',
                        inactivePath: 'inactive',
                        size: { width: 21, height: 20 },
                    }}
                />

                <Tab.Screen name='Home'
                    component={ HomeStackScreen }
                    options={{
                        icon: { name: 'home', width: 30, height: 23 }
                    }}
                    imageIcon={{
                        activePath: 'active path',
                        inactivePath: 'inactive',
                        size: { width: 21, height: 20 },
                    }}
                />
                
                <Tab.Screen name='Earning'
                    component={ EarningStackScreen }
                    options={{
                        icon: { name: 'earnings', width: 12, height: 19 }
                    }}
                    imageIcon={{
                        activePath: 'active path',
                        inactivePath: 'inactive',
                        size: { width: 21, height: 20 },
                    }}
                />

                <Tab.Screen name='Profile'
                    component={ ProfileStackScreen }
                    options={{
                        icon: { name: 'profile', width: 19, height: 23 }
                    }}
                    imageIcon={{
                        activePath: 'active path',
                        inactivePath: 'inactive',
                        size: { width: 21, height: 20 },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}