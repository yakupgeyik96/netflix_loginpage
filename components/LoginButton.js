import React from 'react';
import { View, Dimensions, Text } from 'react-native';

const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const LoginButton = (props) => {

    const width = screenwidth * props.width;
    const height = screenheight * props.height;

    return (
        <View style={[{
            backgroundColor: props.color,
            width : width,
            height: height,
        }, props.style]}>
            <Text style={{
                color: props.textColor,
                fontSize: 18,
                fontWeight:'bold'
            }}>
                {props.value}
            </Text>
        </View>
    );
}

export default LoginButton;