import Header from "../../components/header/header";
import { View, KeyboardAvoidingView, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import UpdateProfileForm from "../../components/updateProfileForm/updateProfileForm";
import { useState } from "react";
import { SessionController } from "../../session/sessionController";

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
                <Header />
                <SafeAreaView style={styles.kaView}>
                    <View>
                        <Text style={styles.header}> Update your profile </Text>
                        <UpdateProfileForm navigation={navigation} userName={userName} age={age} photo={photo}/>
                    </View>
                </SafeAreaView>
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
        marginBottom: 20
    },
    kaView: {
        backgroundColor: '#1d2452',
        padding: 10,
        width: '80%',
        marginTop: 50
    }
})