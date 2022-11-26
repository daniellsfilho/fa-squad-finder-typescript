import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { faUsers } from "@fortawesome/free-solid-svg-icons"

export default function SquadCard(props : any){
    const { name, age, rank, description, players, playersLimit} = props
    let playersQuantity = players.length
    return(
        <>
            <View style={styles.card}>
                <View style={styles.cardIconArea}>
                    <FontAwesomeIcon icon={faUsers} size={60} style={styles.cardUsersIcon}/> 
                    <Text style={styles.playersQuantity}> {playersQuantity} / {playersLimit} </Text>
                </View>
                
                <ScrollView style={styles.squadInfo} nestedScrollEnabled={true}>
                    <Text style={styles.cardText}>{name}</Text>
                    <Text style={styles.cardText}>Idade mínima: {age}</Text>
                    <Text style={styles.cardText}>Restrição de ranque: {rank}</Text>
                    <Text style={styles.cardText}>Descrição: {description}</Text>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        maxHeight: 150,
        width: '80%',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    cardUsersIcon:{
        display: 'flex',
        color: '#fff',
        marginTop: 20,
    },
    cardText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        maxWidth: 200,
        flexDirection: 'column'
    },
    squadInfo:{
        position: 'relative',
        height: 200,
        left: 85,
    },
    cardIconArea:{
        position: 'absolute',
        alignItems: 'center',
        marginLeft: 15
    },
    playersQuantity:{
        marginTop: 5,
        color: '#fff',
        fontWeight: 'bold'
    }
})