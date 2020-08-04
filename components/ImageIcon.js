
import React from 'react';
import { Image } from 'react-native';


export function ImageIcon(props) {

    console.log(props)

    let icon = props.active
        ? props.sourceActive
        : props.sourceInactive;

    return (
        <Image source={icon} style={{ width: props.width, height: props.height }} />
    );
}