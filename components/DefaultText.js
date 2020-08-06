
import React from 'react';
import { Text } from 'react-native';


/**
 * Wrapper function that applies a default fontFamily to React Native's
 * <Text> component. This helps create a "global" or consistent font for all
 * text in app while still allowing the additional of other style attributes
 * or changing of the default font (if applicable).
 * @param {any} props
 * @return {Text}
 */
export function DefaultText({ style, children }) {
    let styleDefaults = { 'fontFamily': 'Montserrat_400Regular' };

    let getBasicStyles = () => {
        return { ...styleDefaults, ...style };
    }

    // Combine any styles passed to the component with it's defaults
    let getCombinedStyles = () => {
        if (style) {
            // If the object containes a key with `0` then it must be an
            // array of styles so loop through each and join them in order
            if (style.hasOwnProperty('0')) {
                let combinedObjStyles = {};

                // Combine all the style objects
                style.forEach((styleObj, index) => {
                    Object.assign(combinedObjStyles, styleObj);
                });

                return {...styleDefaults, ...combinedObjStyles };
            }
                else {
                    return getBasicStyles();
                }
        }
            else {
                return getBasicStyles();
            }
    };

    return (
        <Text style={ getCombinedStyles() }>{ children }</Text>
    );
}