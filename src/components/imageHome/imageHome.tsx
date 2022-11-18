import { Image, StyleSheet, View } from "react-native";

export default function ImageHome(){
    return(
        <Image
            style={styles.imageHome}
            source={require('../../images/Home.png')} />
    )
}

const styles = StyleSheet.create({
    imageHome:{
        backgroundColor: '#d9d9d9',
        width: 300,
        height: 150,
        margin: 20,
        opacity: 0.85,
        borderRadius: 10
    }
})