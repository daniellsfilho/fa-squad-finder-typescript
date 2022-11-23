import { StyleSheet, TextInput, View } from "react-native"

export default function Input(props: any){

    const {placeholder, type, value, onValueChange} = props

    return(
            <TextInput style={styles.input} placeholder={placeholder} keyboardType={type} onChangeText={onValueChange} />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        height: 45,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        color: '#eee',
        marginBottom: 15
    }
})