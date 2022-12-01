import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SelectorGroup from "../../components/selectorGroup/selectorGroup";
import SquadCard from "../../components/squadCard/squadCard";
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import { Squad } from "../../models/Squad";
import { SessionController } from "../../session/sessionController";

export default function SquadPage({navigation} : any){

    function navigateToCreateSquads(){
        navigation.navigate('CreateSquads')
    }

    function navigateToSearchSquads(){
        navigation.navigate('SearchSquads')
    }

    async function navigateToSquadDetails(squad: Squad){
        await sessionController.setSquadData(squad)
        navigation.navigate('SquadDetails')
    }

    const [squadList, setSquadList]: any[] = useState([])
    const sessionController = new SessionController()

    useEffect(() => {
        async function loadSquads() {
            const userId = await sessionController.getUserId()
            await api.get(`${URI.SQUADS}/user/${userId}`).then(response => {
                setSquadList(response.data)
            }).catch(error => console.log(error))
        }
        loadSquads()
    }, [])

    return(
        <>
            <View style={styles.view}>
            <Header />
            <ScrollView style={styles.scrollView} nestedScrollEnabled={true} 
                contentContainerStyle={{alignItems: "center"}}>
            <Text style={styles.header}> Seus squads </Text>
                <SelectorGroup />
                    <View style={styles.squadCardView}>
                    {squadList.map((squad : Squad) => (
                        <SquadCard 
                            onPress={() => {navigateToSquadDetails(squad)}}
                            key={squad.id}
                            name={squad.name}
                            age={squad.minAge}
                            rank={squad.minRank}
                            description={squad.description}
                            players={squad.members}
                            playersLimit={squad.maxMembers}/>
                    ))}
                    </View>
                <Button 
                    width="80%"
                    title={'Crie um novo Squad'}
                    onPress={navigateToCreateSquads}
                    textColor={'#ffffff'}/>
                <Button 
                    width="80%"
                    title={'Encontre um Squad'}
                    onPress={navigateToSearchSquads}
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
    header:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25
    },
    squadCardView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    }
})