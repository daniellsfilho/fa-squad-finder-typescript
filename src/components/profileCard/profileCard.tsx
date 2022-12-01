import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { SessionController } from "../../session/sessionController";

export default function ProfileCard(props: any) {
    const { username, age, rating, navigation } = props

    return(
        <>
            <View style={styles.card}>
                <Pressable onPress={() => navigation.navigate('UpdateProfile')} style={styles.editUserIcon}>
                    <FontAwesomeIcon icon={faEdit} size={20} color={'#fff'}/>
                </Pressable>
                <FontAwesomeIcon icon={faUserCircle} size={100} style={styles.cardUserIcon}/>
                <View style={styles.userInfo}>
                    <Text style={styles.cardText}>Nome de usuário: {username} </Text>
                    <Text style={styles.cardText}>Idade: {age}</Text>
                    <Text style={styles.cardText}>Rating: {rating}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card:{
        position: 'relative',
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        height: '45%',
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
        marginTop: 5
    },
    cardUserIcon:{
        display: 'flex',
        color: '#fff',
        marginLeft: 5
    },
    editUserIcon:{
        display: 'flex',
        color: '#fff',
        left: '45%'
    },  
    userInfo:{
        top: 20,
        alignItems: "center"
    }
})