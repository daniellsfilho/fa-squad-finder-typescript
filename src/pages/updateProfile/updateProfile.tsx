import Header from "../../components/header/header";
import { View, KeyboardAvoidingView, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import UpdateProfileForm from "../../components/updateProfileForm/updateProfileForm";
import { useState } from "react";
import { SessionController } from "../../session/sessionController";
import { ScrollView } from "react-native-gesture-handler";

export default function UpdateProfilePage({ navigation }: any){

    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [photo, setPhoto] = useState('')
    const [email, setEmail] = useState('')
    const sessionController = new SessionController()

    const setData = async () => {
        const resultUserName = await sessionController.getUserName()
        const resultAge = await sessionController.getUserAge()
        const resultPhoto = await sessionController.getUserPhoto()
        const resultEmail = await sessionController.getUserEmail()

        setUserName(resultUserName)
        setAge(resultAge)
        setPhoto(resultPhoto)
        setEmail(email)
    }

    setData()

    return(
        <>
            <View style={styles.view}>
                <Header navigation={navigation}/>
                <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.header}> Atualize seu perfil </Text>
                        <UpdateProfileForm navigation={navigation} userName={userName} age={age} photo={photo}/>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#1d2452',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50
    },
    scrollView:{
        backgroundColor: '#1d2452',
        marginTop: 75,
        width: '100%'
    }
})