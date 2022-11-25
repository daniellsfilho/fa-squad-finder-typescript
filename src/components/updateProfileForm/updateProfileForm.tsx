import { useState } from "react"
import { View, StyleSheet, Keyboard } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import { SessionController } from "../../session/sessionController";
import Button from "../button/button";

export default function UpdateProfileForm(props: any){

    const { navigation, userName, age, photo } = props

    const [newUserName, setNewUserName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newPhoto, setNewPhoto] = useState('')

    const handleUpdateUser = async () => {
        try {
            Keyboard.dismiss()
            const sessionController = new SessionController()
            const email = await sessionController.getUserEmail()
            if (email) {

                const newAgeInt = newAge ? parseInt(newAge) : age
                const newUserNameConfirm = newUserName ? newUserName : userName
                const newPhotoConfirm = newPhoto ? newPhoto : photo

                const userUpdate = {
                    email: email,
                    userName: newUserNameConfirm,
                    age: newAgeInt,
                    photo: newPhotoConfirm
                }
    
                const res = await api.put(URI.UPDATEUSER, userUpdate)
                sessionController.setUserData(res.data)
                navigation.navigate('Profile')
            }
        } catch (error) {
            console.log(error)
            alert('erro')
        }
    }

    return(
        <View>
            
            <TextInput style={styles.input} placeholder={userName} keyboardType="default" defaultValue={userName}  value={newUserName} onChangeText={setNewUserName}/>
            <TextInput style={styles.input} placeholder={age.toString()} keyboardType="numeric" defaultValue={age} value={newAge} onChangeText={setNewAge}/>
            <TextInput style={styles.input} placeholder="new photo" keyboardType="default" defaultValue={photo} value={newPhoto} onChangeText={setNewPhoto}/>
            <Button 
                onPress={() => {handleUpdateUser()}}   
                title="Update profile"
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