
import React from 'react';
import { Image } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
    MontserratAlternates_400Regular,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
} from '@expo-google-fonts/montserrat-alternates'
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
        MontserratAlternates_400Regular,
        MontserratAlternates_600SemiBold,
        MontserratAlternates_700Bold,
    });

    // Show the splash screen if the assets (fonts, etc.) hasn't finished loading
    if (! fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBar={ (props) => <BottomTabBar {...props} /> }
                // TODO[BUGFIX]: refactor to use screen options instead of custom tabbar. Bug on desktop where icons are not showing.
                // screenOptions={({ route }) => ({
                    // tabBarIcon: ({ focused, color, size}) => {
                    //     let iconName = `${route.toLowerCase()}`;
                    //     let iconPath = focused ? ;
                    //     return <Image source={icon} />;
                    // }
                // })}
                tabBarOptions={{
                    // activeTintColor: '#'
                    style: {
                        height: 72,
                        backgroundColor: '#e5e5e5',
                    }
                }}
            >

                <Tab.Screen name='Message'
                    component={ MessageStackScreen }
                    options={{
                        imageIcon: {
                            activePath: require('./assets/icons/chat_white.png'),
                            inactivePath: require('./assets/icons/chat.png'),
                        }
                    }}
                />

                <Tab.Screen name='Search'
                    component={ SearchStackScreen }
                    options={{
                        imageIcon: {
                            activePath: require('./assets/icons/search_white.png'),
                            inactivePath: require('./assets/icons/search.png'),
                        }
                    }}
                />

                <Tab.Screen name='Home'
                    component={ HomeStackScreen }
                    options={{
                        imageIcon: {
                            activePath: require('./assets/icons/home_white.png'),
                            inactivePath: require('./assets/icons/home.png'),
                        }
                    }}
                />
                
                <Tab.Screen name='Earning'
                    component={ EarningStackScreen }
                    options={{
                        imageIcon: {
                            activePath: require('./assets/icons/earnings_white.png'),
                            inactivePath: require('./assets/icons/earnings.png'),
                        }
                    }}
                />

                <Tab.Screen name='Profile'
                    component={ ProfileStackScreen }
                    options={{
                        imageIcon: {
                            activePath: require('./assets/icons/profile_white.png'),
                            inactivePath: require('./assets/icons/profile.png'),
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}