import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native';

export default function ImageLogin(){
    return(
        <Image 
        style={styles.image}
        source={require('../../images/Logo.png')} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginTop: 75,
        marginBottom: 75
    }
})