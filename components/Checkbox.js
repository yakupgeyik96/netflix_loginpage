import React from 'react';
import { View, 
        Dimensions, 
        Text, 
        TouchableOpacity 
        } from 'react-native';

const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const Checkbox = (props) => {
    return (
        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <TouchableOpacity 
                activeOpacity={1} 
                onClick={props.onPress} 
                style={{
                    width: screenwidth * 0.04,
                    height: screenheight * 0.02,
                    backgroundColor:'#737373',
                    borderRadius:2,
                    borderWidth: 1.5,
                    alignItems:'center',
                    justifyContent:'center'}}>

                    {props.status && <View
                        style={{
                            width:"90%",
                            height: "90%",
                            backgroundColor:'white',
                            borderRadius:2,
                        }}
                    />}
            </TouchableOpacity>
            <Text style={{
                color:'#808080',
                marginLeft:5}} >
                    
                {props.text}
            </Text>
        </View>
    );
}

export default Checkbox;