import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            { props.children }
        </View>
    ); 
}

const styles = {
    containerStyle:{
        borderWidth:1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 2,
        elavation:1,
        marginLeft:1,
        marginRight:5,
        marginTop:10,
    }
}
export {Card} ;