import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { SessionController } from "../../session/sessionController";

export default function ProfileCard(props: any) {
    const { username, age, rating } = props

    return(
        <>
            <View style={styles.card}>
                <FontAwesomeIcon icon={faUserCircle} size={75} style={styles.cardUserIcon}/>
                <View style={styles.userInfo}>
                    <Text style={styles.cardText}>Username: {username} </Text>
                    <Text style={styles.cardText}>Age: {age}</Text>
                    <Text style={styles.cardText}>Rating: {rating}</Text>
                </View>
                <FontAwesomeIcon icon={faEdit} size={20} style={styles.editUserIcon}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card:{
        position: 'absolute',
        top: 100,
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        height: '25%',
        width: '80%',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    cardText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 5
    },
    cardUserIcon:{
        display: 'flex',
        color: '#fff',
        marginTop: 25,
        marginLeft: 5
    },
    editUserIcon:{
        display: 'flex',
        color: '#fff',
        left: '93%',
        bottom: '95%'
    },  
    userInfo:{
        bottom: 40,
        left: 120
    }
})