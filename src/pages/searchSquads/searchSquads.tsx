import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../components/header/header";
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import SquadCard from "../../components/squadCard/squadCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function SearchSquadsPage(){

    const [squads, setSquads]: any[] = useState([])
    const [name, setName] = useState('')

    const findSquad = async (squadName: string) => {
        await api.get(`${URI.SQUADS}/${squadName}`).then(response => {
            setSquads(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        async function loadSquads() {
            await api.get(`${URI.SQUADS}`).then(response => {
                setSquads(response.data)
            }).catch(error => console.log(error))
        }
        loadSquads()
    }, [])

    return(
        <>
            <SafeAreaView style={styles.view}>
                <Header />
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.header}> Encontre squads </Text>
                    <View style={styles.formView}>
                        <TextInput style={styles.input} placeholder="Nome do Squad" keyboardType="default" value={name} onChangeText={setName}/>
                        <Pressable style={styles.button} onPress={() => {findSquad(name)}}>
                            <FontAwesomeIcon icon={faSearch} color={'#fff'} size={25}/>
                        </Pressable>
                    </View>
                    <View style={styles.squadCardView}>
                    {squads.map((squad: any) => (
                        <SquadCard 
                            key={squad.id}
                            name={squad.name}
                            age={squad.minAge}
                            rank={squad.minRank}
                            description={squad.description}
                            players={squad.members}
                            playersLimit={squad.maxMembers}/>
                    ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d2452'
    },
    input:{
        fontSize: 20,
        color: '#000',
        height: 40,
        width: '87%',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgb(217, 217, 217)'
    },
    scrollView:{
        marginTop: 75,
        width: '100%'
    },
    header:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15
    },
    formView: {
        width: '90%',
        marginLeft: '5%',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    squadCardView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    button: {
        padding: 20,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        textAlignVertical: "center",
        backgroundColor: '#e51c44',
        borderRadius: 5
    }
})