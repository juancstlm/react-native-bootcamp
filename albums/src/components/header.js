import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>);
};

const styles = {
    viewStyle: {
      backgroundColor: '#195f71',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF'
    }
};
export default Header;