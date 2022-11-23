import { TextInput, StyleSheet } from "react-native"

export default function TextArea(props: any){
    const { placeholder, type} = props

    return(
        <TextInput style={styles.input} placeholder={placeholder} keyboardType={type} numberOfLines={5}/>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        color: '#eee',
        marginBottom: 15
    }
})