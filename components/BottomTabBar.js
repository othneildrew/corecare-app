
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function BottomTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    // Don't show the tab if it's visibility is set to false
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            { state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const icon = isFocused ? options.imageIcon.activePath : options.imageIcon.inactivePath;


                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    // Navigate to route if it isn't focused or default event surpressed
                    if (! isFocused && ! event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };


                return (
                    <TouchableOpacity
                        style={ isFocused ? styles.tabSelected : styles.tab }
                        accessibilityRole='button'
                        accessibilityStates={ isFocused ? [ 'selected' ] : [] }
                        accessibilityLabel={ options.tabBarAccessibilityLabel }
                        testID={ options.tabBarTestID }
                        onPress={ onPress }
                        onLongPress={ onLongPress }
                        key={index}
                    >
                        <Image source={ icon } />
                    </TouchableOpacity>
                );
            }) }
            
            
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'relative',
        width: '100%',
        height: 72,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // shadowOffset: { width: -10, height: -10 },
        // shadowRadius: 5,
        // shadowColor: '#0000ff',
        // boxShadow: '0px 0px 5px rgba(0, 101, 95, 0.1)',
        backgroundColor: '#ffffff',
    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 51,
        height: 51,
        // backgroundColor: 'blue',
    },
    tabSelected: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 51,
        height: 51,
        borderRadius: 50,
        // borderWidth: 6,
        // borderColor: '#e5e5e5',
        // outline
        backgroundColor: '#41A8A2',
        transform: [{ translateY: -20 }]
    }
});