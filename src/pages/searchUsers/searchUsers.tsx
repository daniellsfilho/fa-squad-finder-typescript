import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert  } from "react-native";
import Header from "../../components/header/header";
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import SquadCard from "../../components/squadCard/squadCard";
import { faSearch, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import UserCard from "../../components/userCard/userCard";
import { SessionController } from "../../session/sessionController";

export default function SearchUsersPage({navigation}: any){

    const [users, setUsers]: any[] = useState([])
    const [name, setName] = useState('')

    const findUser = async (userName: string) => {
        await api.get(`${URI.GETUSERS}/${userName}`).then(response => {
            setUsers(response.data)
        }).catch(error => console.log(error))
    }

    const inviteBody = {
        title: "Você foi convidado",
        body: "O líder do squad quer jogar com você"
    }

    const inviteUser = async (userId: number) => {
        try {

            const sessionController = new SessionController()
            const myId = await sessionController.getUserId()
            
            if(myId == userId){
                window.alert('Você não pode convidar a si mesmo!')
                return
            }

            const squadId = await sessionController.getSquadId()
            const res = await api.post(`${URI.INVITE}/${squadId}/${userId}`, inviteBody)
            console.log(res.data)

            window.alert('Jogador convidado!')

        } catch (error) {
            console.log(error)
            window.alert('Ocorreu um erro')
        }
    }

    useEffect(() => {
        async function loadUsers() {
            await api.get(`${URI.GETUSERS}`).then(response => {
                setUsers(response.data)
            }).catch(error => console.log(error))
        }
        loadUsers()
    }, [])

    return(
        <>
            <SafeAreaView style={styles.view}>
                <Header navigation={navigation}/>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.header}> Encontre jogadores </Text>
                    <View style={styles.formView}>
                        <TextInput style={styles.input} placeholder="Nome do Jogador" keyboardType="default" value={name} onChangeText={setName}/>
                        <Pressable style={styles.button} onPress={() => {findUser(name)}}>
                            <FontAwesomeIcon icon={faSearch} color={'#fff'} size={25}/>
                        </Pressable>
                    </View>
                    <View style={styles.userCardView}>
                    {users.map((user: any) => (
                        <>
                            <View key = {user.id} style={{width: '100%', alignItems: 'center'}}>
                                <UserCard
                                    userName = {user.userName}
                                    age = {user.age}
                                    rating = {user.rating}/>
                                <Pressable onPress={() => {inviteUser(user.id)}} style={styles.inviteIcon}>
                                    <FontAwesomeIcon icon={faEnvelope} size={25} color={'#fff'}/>
                                </Pressable>
                            </View>
                        </>
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
    userCardView: {
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
    },
    inviteIcon:{
        marginLeft: '67%',
        bottom: '65%'
    }
})