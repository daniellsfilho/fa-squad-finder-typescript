import { SafeAreaView, StyleSheet, View, KeyboardAvoidingView, Text } from "react-native";
import Header from "../../components/header/header";
import CreateSquadForm from "../../components/createSquadForm/createSquadForm";
import { ScrollView } from "react-native-gesture-handler";


export default function CreateSquadsPage({ navigation }: any) {
    return (
        <>
            <View style={styles.view}>
                <Header navigation={navigation}/>
                <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: "center"}}>
                        <Text style={styles.header}> Criar novo squad </Text>
                        <CreateSquadForm navigation={navigation}/>
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