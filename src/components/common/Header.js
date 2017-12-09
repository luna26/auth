// Import a library to help a create a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { headerText } = props;
    return (
        <View style={viewStyle}>
            <Text style={textStyle} >{headerText}</Text>
        </View>
    );
};

// Create a object to use the styles
const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        height: 80,
        justifyContent: 'center', //modify the content vertically flex-start, flex-end, center
        alignItems: 'center', //modify the content horizontally flex-start, center, flex-end
        shadowColor:'#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },

    textStyle:{
        fontSize: 20
    }
}

// Render is to the device
export { Header };