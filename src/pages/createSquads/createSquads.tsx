import { SafeAreaView, StyleSheet, View, KeyboardAvoidingView, Text } from "react-native";
import Header from "../../components/header/header";
import CreateSquadForm from "../../components/createSquadForm/createSquadForm";


export default function CreateSquadsPage({ navigation }: any) {
    return (
        <>
            <View style={styles.view}>
                <Header />
                <SafeAreaView style={styles.kaView}>
                    <KeyboardAvoidingView behavior="position" enabled>
                            <Text style={styles.header}> Create a new squad </Text>
                            <CreateSquadForm navigation={navigation}/>
                    </KeyboardAvoidingView>
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
    },
    kaView: {
        backgroundColor: '#1d2452',
        padding: 10,
        width: '80%',
        marginTop: 100
    }
})