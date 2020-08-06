
import React from 'react';
import { Text } from 'react-native';


/**
 * Wrapper function that applies a default fontFamily to React Native's
 * <Text> component. This helps create a "global" or consistent font for all
 * text in app.
 * @param {any} props
 * @return {Text}
 */
export function DefaultText({ style, children }) {
    // Combine any styles passed to the component with it's defaults
    let getCombinedStyles = () => {
        let styleDefaults = { 'fontFamily': 'Montserrat_400Regular' };
        return { ...style, ...styleDefaults };
    };

    return (
        <Text style={ getCombinedStyles() }>{ children }</Text>
    );
}