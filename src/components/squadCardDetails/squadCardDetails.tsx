import { faEdit, faUsers, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function SquadCardDetails(props : any) {

    const { squadName, squadMembers, maxMembers, description, minAge, minRank, navigation } = props
    const quantMembers = squadMembers.length

    function navigateToUpdateSquad(){
        navigation.navigate('UpdateSquad')
    }

    return(
        <>  
            <Text style={styles.header}>
                {squadName.toUpperCase()}
            </Text>
            <View style={styles.card}>
                <Pressable style={styles.editSquadIcon} onPress={() => {navigateToUpdateSquad()}}>
                    <FontAwesomeIcon icon={faEdit} size={20} color={'#fff'}/>
                </Pressable>
                <FontAwesomeIcon icon={faUsers} size={100} style={styles.cardSquadIcon}/>
                <Text style={styles.cardText}>{quantMembers}/{maxMembers}</Text>
                <View style={styles.squadInfo}>
                    <Text style={styles.cardText}>Descrição: {description}</Text>
                    <Text style={styles.cardText}>Idade mínima: {minAge.toString()}</Text>
                    <Text style={styles.cardText}>Rank mínimo: {minRank}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30
    },
    trashIcon: {
        left: '20%'
    },
    card:{
        position: 'relative',
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        height: 350,
        width: '80%',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        alignItems: "center"
    },
    cardText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 5,
        maxWidth: '80%'
    },
    cardSquadIcon:{
        display: 'flex',
        color: '#fff',
        marginLeft: 5
    },
    editSquadIcon:{
        display: 'flex',
        color: '#fff',
        left: '45%'
    },  
    squadInfo:{
        top: 20,
        alignItems: "center"
    }
})