
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Message' component={MessageScreen} />
            </Stack.Navigator> */}

            <Tab.Navigator
                initialRouteName='Home'
                // tabBar={ props => <BottomTabBar {...props} /> }
                >
                <Tab.Screen name='Message' component={ MessageStackScreen } />
                <Tab.Screen name='Search' component={ SearchStackScreen } />
                <Tab.Screen name='Home' component={ HomeStackScreen } />
                <Tab.Screen name='Earning' component={ EarningStackScreen } />
                <Tab.Screen name='Profile' component={ ProfileStackScreen } />
            </Tab.Navigator>
        </NavigationContainer>
    );
}