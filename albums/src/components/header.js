import React from 'react';
import {Text, View, StatusBar} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return(
        <View style={viewStyle}>
            <StatusBar
                barStyle="light-content"
            />
            <Text style={textStyle}>{props.headerText}</Text>
        </View>);
};

const styles = {
    viewStyle: {
      backgroundColor: '#2F3A49',
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