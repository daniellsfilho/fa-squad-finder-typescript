import Header from "../../components/header/header";
import { View, StyleSheet, ScrollView, Text } from "react-native"
import InvitationCard from "../../components/invitationCard/invitationCard";
import { useEffect, useState } from "react";
import { SessionController } from "../../session/sessionController";
import { api } from "../../integration/axios";
import { URI } from "../../integration/uri";
import React from "react";

const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function InvitationsPage({navigation} : any){

    const [invitationList, setInvitationList] = useState([])

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

    useEffect(() => {
        async function loadInvitations() {
            const sessionController = new SessionController()
            const userId = await sessionController.getUserId()
            await api.get(`${URI.USERINVITATIONS}/${userId}`).then(response => {
                setInvitationList(response.data)
            }).catch(error => console.log(error))
        }
        loadInvitations()
    }, [])

    return(
        <View style={styles.view}>
            <Header navigation={navigation}/>
            <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: "center"}}>
                <Text style={styles.header}> Seus Convites: </Text>
                {invitationList.map((invitation: any) => (
                    <InvitationCard key={invitation.id} squadName={invitation.squad.name} squadDescription={invitation.squad.description} invitationId={invitation.id} navigation={navigation}/>
                ))}
                
            </ScrollView>
        </View>
        
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
        marginTop: 75,
        width: '100%'
    },
    header:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30
    }
})