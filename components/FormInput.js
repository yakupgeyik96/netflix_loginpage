import React from 'react';
import { TextInput, Dimensions } from 'react-native';

const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const FormInput = (props) => {

    const width = screenwidth * props.width;
    const height = screenheight * props.height;

    return (
        <TextInput style={[{
            backgroundColor: props.color,
            width: width,
            height: height,
            paddingLeft: width * 0.07,
        }, props.style]} 
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor} >
        </TextInput>
    );
}

export default FormInput;