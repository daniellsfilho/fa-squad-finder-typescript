import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native"
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SquadCardDetails from "../../components/squadCardDetails/squadCardDetails";
import UserCard from "../../components/userCard/userCard";
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import { SessionController } from "../../session/sessionController";

export default function SquadDetails({ navigation } : any){

    const [squadName, setSquadName] = useState('')
    const [squadMembers, setSquadMembers] = useState([])
    const [maxMembers, setMaxMembers] = useState(0)
    const [description, setDescription] = useState('')
    const [minAge, setMinAge] = useState(0)
    const [minRank, setMinRank] = useState('')
    const [id, setId] = useState()
    const [userList, setUserList] = useState([])

    function navigateToSearchUsers(){
        navigation.navigate('SearchUsers')
    }

    const getData = async () => {
        const sessionController = new SessionController()
        const name = await sessionController.getSquadName()
        const members = await sessionController.getSquadMembers()
        const maxMembers = await sessionController.getSquadsMaxMembers()
        const description = await sessionController.getSquadDescription()
        const minAge = await sessionController.getSquadMinAge()
        const minRank = await sessionController.getSquadMinRank()
        const id = await sessionController.getSquadId()
        setSquadName(name)
        setSquadMembers(members)
        setMaxMembers(maxMembers)
        setDescription(description)
        setMinAge(minAge)
        setMinRank(minRank)
        setId(id)
    }

    useEffect(() => {
        async function loadUsers() {
            const sessionController = new SessionController()
            const squadId = await sessionController.getSquadId()
            await api.get(`${URI.GETUSERSBYSQUAD}/${squadId}`).then(response => {
                setUserList(response.data)
            }).catch(error => console.log(error))
        }
        loadUsers()
    }, [])

    useEffect(() => {
        getData()
    }, [])

    return(
        <>
            <View style={styles.view}>
                <Header navigation={navigation}/>
                <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: "center"}}>
                    <SquadCardDetails squadName={squadName} squadMembers={squadMembers} maxMembers={maxMembers} description={description} minAge={minAge} minRank={minRank} navigation={navigation}/>
                    <Text style={styles.text}> Membros:  ({squadMembers.length}/{maxMembers})</Text>
                    <View style={styles.userCardView}>
                        {userList.map((user: any) => (
                            <UserCard 
                                key = {user.id}
                                userName = {user.userName}
                                age = {user.age}
                                rating = {user.rating}
                            />
                        ))}
                    </View>
                    <Button 
                        width="80%"
                        title={'Convide outros jogadores'}
                        onPress={() => {navigateToSearchUsers()}}
                        textColor={'#ffffff'}/>
                    <Footer />
                </ScrollView>
            </View>
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
    scrollView:{
        backgroundColor: '#1d2452',
        marginTop: 75,
        width: '100%'
    },
    userCardView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    text:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    }
})