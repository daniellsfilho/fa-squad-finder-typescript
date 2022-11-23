import { useState } from "react";
import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import Button from "../button/button";
import Input from "../input/input";
import TextArea from "../textArea/textArea";

export default function CreateSquadForm() {
    
    const [name, setName] = useState('')
    const [minAge, setMinAge] = useState('')
    const [minRank, setMinRank] = useState('')
    const [description, setDescription] = useState('')

    return(
        <View>
            <TextInput style={styles.input} placeholder="Squad name" keyboardType="default" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Min Age Restriction" keyboardType="numeric" value={minAge} onChangeText={setMinAge}/>
            <TextInput style={styles.input} placeholder="Min Rank Restriction*" keyboardType="default" value={minRank} onChangeText={setMinRank}/>
            <TextInput style={styles.textarea} numberOfLines={3} placeholder="Description" keyboardType="default" value={description} onChangeText={setDescription}/>
            <Button 
                onPress={() => {console.log(name); console.log(minAge); console.log(minRank); console.log(description)}}   
                title="Create squad"
                textColor="#fff"
            />
        </View>
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
    },
    textarea: {
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        color: '#eee',
        marginBottom: 15
    }
})