import React from 'react';
import {Text, Image, Linking } from 'react-native';
import {Button,Card,CardSection } from './common';

const Detay =({data})=>{
    const { imageStyle, titleStyle }=styles;
    return(
       <Card>
            <CardSection>
               <Text style={titleStyle}>{data.title}</Text>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri : data.image }}/>
                </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(data.url)} >Satın Al! </Button>
            </CardSection>
       </Card>
    );
};


const styles={
    imageStyle:{
        height:300,
        flex:1
    },
    titleStyle:{
        fontSize:18
    }
}



export default Detay;