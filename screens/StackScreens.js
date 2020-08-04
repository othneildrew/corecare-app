
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screens required for each navigation stack
import MessageScreen from './MessageScreen';
import SearchScreen from './SearchScreen'
import HomeScreen from './HomeScreen';
import EarningScreen from './EarningScreen';
import ProfileScreen from './ProfileScreen';

// Create stack navigators
const MessageStack  = createStackNavigator();
const SearchStack   = createStackNavigator();
const HomeStack     = createStackNavigator();
const EarningStack  = createStackNavigator();
const ProfileStack  = createStackNavigator();
const SettingStack  = createStackNavigator();


// Specify stack navigators for each group of screens
export function MessageStackScreen() {
    return (
        <MessageStack.Navigator>
            <MessageStack.Screen name='Message' component={ MessageScreen } />
        </MessageStack.Navigator>
    );
}

export function SearchStackScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name='Search' component={ SearchScreen } />
        </SearchStack.Navigator>
    );
}

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={ HomeScreen } />
        </HomeStack.Navigator>
    );
}

export function EarningStackScreen() {
    return (
        <EarningStack.Navigator>
            <EarningStack.Screen name='Earning' component={ EarningScreen } />
        </EarningStack.Navigator>
    );
}

export function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='Profile' component={ ProfileScreen } />
        </ProfileStack.Navigator>
    );
}