import { SafeAreaView, StyleSheet, View, KeyboardAvoidingView, Text } from "react-native";
import Header from "../../components/header/header";
import CreateSquadForm from "../../components/createSquadForm/createSquadForm";


export default function CreateSquadsPage({ navigation }: any) {
    return (
        <>
            <SafeAreaView style={styles.view}>
                <Header />
                <SafeAreaView style={styles.kaView}>
                        <Text style={styles.header}> Create a new squad </Text>
                        <CreateSquadForm navigation={navigation}/>
                </SafeAreaView>
            </SafeAreaView>
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
        padding: 10,
        width: '80%',
        marginTop: 50
    }
})