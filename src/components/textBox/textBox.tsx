import { StyleSheet, Text, View } from "react-native";

export default function TextBox(){
    return(
        <>
            <View style={styles.view}>
                <Text style={styles.text}> Find your squad and track{'\n'} your stats!</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view:{
        margin: 20
    },
    text:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
})