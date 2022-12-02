import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faUsers, faCheck, faClose } from "@fortawesome/free-solid-svg-icons"
import { api } from "../../integration/axios"
import { URI } from "../../integration/uri"
import React from "react"



export default function InvitationCard(props: any){

    const { squadName, squadDescription, invitationId, navigation, window} = props

    const declineInvitation = async () => {
        try {
            await api.delete(`${URI.DECLINEINVITATION}/${invitationId}`)
            window.alert('Convite recusado')
            navigation.replace('Invitations')
        } catch (error) {
            console.log(error)
        }
    }

    const acceptInvitation = async () => {
        try {
            await api.delete(`${URI.ACCEPTINVITATION}/${invitationId}`)   
            window.alert('Convite aceito!')
            navigation.replace('Invitations')
        } catch (error) {
            console.log(error)
            alert('Squad cheio!')
        }
    }

    return(
        <View style={styles.card}>
            <View style={styles.cardIconArea}>
                <FontAwesomeIcon icon={faUsers} size={60} style={styles.cardUserIcon}/>
            </View>
            
            <View style={styles.userInfo}>
                <Text style={styles.cardText}>{squadName}</Text>
                <Text style={styles.cardText}>Descrição: {squadDescription}</Text>
                <View style={styles.choice}>
                    <Pressable style={styles.decline} onPress={() => {declineInvitation()}}>
                        <FontAwesomeIcon icon={faClose} color={'#fff'} size={20}/>
                    </Pressable>
                    <Pressable style={styles.accept} onPress={() => {acceptInvitation()}}>
                        <FontAwesomeIcon icon={faCheck} color={'#fff'} size={20}/>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        height: 145,
        width: '80%',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    cardUserIcon:{
        display: 'flex',
        color: '#fff',
        marginTop: 20,
    },
    cardText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        maxWidth: 190,
        flexDirection: 'column',
        marginTop: 5
    },
    userInfo:{
        position: 'relative',
        height: 200,
        left: 85,
    },
    cardIconArea:{
        position: 'absolute',
        alignItems: 'center',
        marginLeft: 15
    },
    choice:{
        marginTop: 10,
        width: '50%',
        flexDirection: 'row',
    },
    decline:{
        padding: 5,
        width: '50%',
        height: '50%',
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    accept:{
        padding: 5,
        width: '50%',
        height: '50%',
        backgroundColor: '#0f0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 10
    }
})