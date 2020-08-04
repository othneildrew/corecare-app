
import React from 'react';
import { Text } from 'react-native';


/**
 * Wrapper function that applies a default fontFamily to React Native's
 * <Text> component. This helps create a "global" or consistent font for all
 * text in app.
 * @param {any} props
 * @return {Text}
 */
export function DefaultText({ children }) {
    return (
        <Text style={{ fontFamily: 'Montserrat_400Regular' }}>{ children }</Text>
    );
}