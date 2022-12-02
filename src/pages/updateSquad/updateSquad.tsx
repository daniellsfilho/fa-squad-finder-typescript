import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Keyboard } from "react-native";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import { SessionController } from "../../session/sessionController";

export default function UpdateSquadPage({navigation}: any){

    const [squadName, setSquadName] = useState('')
    const [squadDescription, setSquadDescription] = useState('')
    const [squadMinAge, setSquadMinAge] = useState('')
    const [squadMinRank, setSquadMinRank] = useState('')
    const [squadMaxMembers, setSquadMaxMembers] = useState('')

    const [oldSquadName, oldSetSquadName] = useState('')
    const [oldSquadDescription, oldSetSquadDescription] = useState('')
    const [oldSquadMinAge, oldSetSquadMinAge] = useState('')
    const [oldSquadMinRank, oldSetSquadMinRank] = useState('')
    const [oldSquadMaxMembers, oldSetSquadMaxMembers] = useState('')

    const sessionController = new SessionController()

    const setData = async() => {
        const nameResult = await sessionController.getSquadName()
        const descResult = await sessionController.getSquadDescription()
        const minAgeResult = await sessionController.getSquadMinAge()
        const minRankResult = await sessionController.getSquadMinRank()
        const maxMembersResult = await sessionController.getSquadsMaxMembers()

        setSquadName(nameResult)
        setSquadDescription(descResult)
        setSquadMinAge(minAgeResult)
        setSquadMinRank(minRankResult)
        setSquadMaxMembers(maxMembersResult)

        oldSetSquadName(nameResult)
        oldSetSquadDescription(descResult)
        oldSetSquadMinAge(minAgeResult)
        oldSetSquadMinRank(minRankResult)
        oldSetSquadMaxMembers(maxMembersResult)


    }

    const updateSquad = async() => {
        try {
            Keyboard.dismiss()
            const squadId = await sessionController.getSquadId()
            if(squadId){
                const name = squadName ? squadName : oldSquadName
                const description = squadDescription ? squadDescription : oldSquadDescription
                const minAge = squadMinAge ? parseInt(squadMinAge) : parseInt(oldSquadMinAge)
                const minRank = squadMinRank ? squadMinRank : oldSquadMinRank
                const maxMembers = squadMaxMembers ? squadMaxMembers : oldSquadMaxMembers

                const squadUpdate = {
                    name: name,
                    description: description,
                    minAge: minAge,
                    minRank: minRank,
                    maxMembers: maxMembers
                }

                const res = await api.put(`${URI.CREATESQUAD}/${squadId}` , squadUpdate)
                sessionController.setSquadData(res.data)
                navigation.navigate('SquadDetails')
            }

        } catch (error) {
            console.log(error)
            window.alert('Ops, ocorreu um erro')
        }
    }

    useEffect(() => {
        setData()
    }, [])

    return(
        <View style={styles.view}>
            <Header navigation={navigation}/>
            <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: "center"}}>
                <Text style={styles.header}> Atualize seu Squad: </Text>
                <View style={styles.kaView}>
                    <TextInput style={styles.input} keyboardType="default" value={squadName} onChangeText={setSquadName}/>
                    <TextInput style={styles.input} keyboardType="numeric" value={squadMinAge.toString()} onChangeText={setSquadMinAge}/>
                    <TextInput style={styles.input} keyboardType="default" value={squadMinRank} onChangeText={setSquadMinRank}/>
                    <TextInput style={styles.input} keyboardType="numeric" value={squadMaxMembers.toString()} onChangeText={setSquadMaxMembers}/>
                    <TextInput style={styles.textarea} numberOfLines={3} keyboardType="default" value={squadDescription} onChangeText={setSquadDescription}/>
                    <Button 
                        width="100%"
                        onPress={() => {updateSquad()}}
                        title="Atualizar squad"
                        textColor="#fff"/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#1d2452',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView:{
        backgroundColor: '#1d2452',
        marginTop: 75,
        width: '100%'
    },
    header: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50
    },
    kaView: {
        padding: 10,
        width: '80%'
    },
    input: {
        backgroundColor: 'rgb(217, 217, 217)',
        height: 45,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        marginBottom: 10
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