import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import Button from "../button/button";

export default function UpdateProfileForm(props: any){

    const { navigation, userName, age, photo } = props

    const [newUserName, setNewUserName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newPhoto, setNewPhoto] = useState('')


    return(
        <View>
            
            <TextInput style={styles.input} placeholder="new username" keyboardType="default"  value={newUserName} onChangeText={setNewUserName}/>
            <TextInput style={styles.input} placeholder="new age" keyboardType="numeric"  value={newAge} onChangeText={setNewAge}/>
            <TextInput style={styles.input} placeholder="new photo" keyboardType="default"  value={newPhoto} onChangeText={setNewPhoto}/>
            <Button 
                onPress={() => {console.log(newAge); console.log(newUserName); console.log(newPhoto)}}   
                title="Create squad"
                textColor="#fff"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgb(217, 217, 217)',
        height: 45,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        marginBottom: 10
    }
})