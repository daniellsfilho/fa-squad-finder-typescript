import { SimpleLineIcons } from "@expo/vector-icons";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Button(props : any) {
    const {onPress, title, textColor, icon, width} = props;

    const styles = StyleSheet.create({
        button:{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: '#e51c44',
            padding: 10,
            borderRadius: 5,
            width: width,
            justifyContent: "center"
        },
        text:{
            fontSize: 17,
            marginLeft: 12
        }
    })

    return(
        <Pressable style={styles.button} onPress={onPress}>
            <SimpleLineIcons
                name={icon}
                size={30}
                color={'#ffffff'}/>
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </Pressable>
    )
}