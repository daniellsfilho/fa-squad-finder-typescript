import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function UserCard(props: any){

    const { userName, age, rating, onPress} = props

    return(
        <Pressable style={styles.card} onPress={onPress}>
            <View style={styles.cardIconArea}>
                <FontAwesomeIcon icon={faUser} size={60} style={styles.cardUserIcon}/>
            </View>
            
            <View style={styles.userInfo}>
                <Text style={styles.cardText}>{userName}</Text>
                <Text style={styles.cardText}>Idade: {age.toString()}</Text>
                <Text style={styles.cardText}>Rating: {rating.toString()}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
        height: 100,
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
        flexDirection: 'column'
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
    }
})