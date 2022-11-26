
import { useState } from "react";
import { View, StyleSheet, TextInput, SafeAreaView, Keyboard } from "react-native";
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import { SessionController } from "../../session/sessionController";
import Button from "../button/button";
import Input from "../input/input";
import TextArea from "../textArea/textArea";

export default function CreateSquadForm(props: any) {
    
    const { navigation } = props

    const [name, setName] = useState('')
    const [minAge, setMinAge] = useState('')
    const [minRank, setMinRank] = useState('')
    const [maxMembers, setMaxMembers] = useState('')
    const [description, setDescription] = useState('')

    const sessionController = new SessionController()

    const handleCreateSquads = async () => {
        try {
            Keyboard.dismiss()
            const minAgeInt = parseInt(minAge)
            const maxMembersInt = parseInt(maxMembers)
            const email: string = await sessionController.getUserEmail()
            if (email) {
                const squadReq = {
                    userEmail: email,
                    name: name,
                    description: description,
                    minAge: minAgeInt,
                    minRank: minRank,
                    maxMembers: maxMembersInt
                }
                console.log(squadReq.userEmail)
    
                const res = await api.post(URI.CREATESQUAD, squadReq)
                console.log(res.data)
                navigation.navigate('Squads')
            }
        } catch (error) {
            console.log(error)
            alert('erro')
        }
    }

    return(
        <>
            <TextInput style={styles.input} placeholder="Squad name" keyboardType="default" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Min Age Restriction" keyboardType="numeric" value={minAge} onChangeText={setMinAge}/>
            <TextInput style={styles.input} placeholder="Min Rank Restriction*" keyboardType="default" value={minRank} onChangeText={setMinRank}/>
            <TextInput style={styles.input} placeholder="Max players" keyboardType="numeric" value={maxMembers} onChangeText={setMaxMembers}/>
            <TextInput style={styles.textarea} numberOfLines={3} placeholder="Description" keyboardType="default" value={description} onChangeText={setDescription}/>
            <Button 
                onPress={() => {handleCreateSquads()}}   
                title="Create squad"
                textColor="#fff"
            />
        </>
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
        marginTop: 10
    },
    textarea: {
        backgroundColor: 'rgb(217, 217, 217)',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        marginBottom: 10
    }
})