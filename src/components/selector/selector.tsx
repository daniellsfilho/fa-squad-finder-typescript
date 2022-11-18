import { Pressable, StyleSheet, Text } from "react-native";

export default function Selector(props : any){
    const {title, onPress, bgColor} = props

    const styles = StyleSheet.create({
        selectorBox: {
            borderWidth: 1,
            borderColor: "#fff",
            alignItems: "center",
            backgroundColor: bgColor,
            padding: 10,
            width: "30%"
        },
        selectorText:{
            color: '#fff',
            fontWeight: '700'
        }
    })

    return(
        <Pressable style={styles.selectorBox} onPress={onPress}>
            <Text style={styles.selectorText}>{title}</Text>
        </Pressable>
    )
}

