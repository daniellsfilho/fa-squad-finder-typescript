import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SelectorGroup from "../../components/selectorGroup/selectorGroup";
import SquadCard from "../../components/squadCard/squadCard";

export default function SquadPage(){

    let squadList = [
        {
            squadId: 1,
            squadName: 'squad 1',
            ageRestriction: '16+',
            rankRestriction: 'iron 1 +',
            description: 'for fun :)',
            players: [
                'eu',
                'gerson'
            ],
            playersLimit: 10
        },
        {
            squadId: 2,
            squadName: 'squad 2',
            ageRestriction: '21+',
            rankRestriction: 'platinum 3 +',
            description: 'road to Immortalsadhkasdlhlksdahklsdahkhksaldhklashkldshkjahds',
            players: [
                'poze',
                'dio',
                'lima',
                'eu',
                'thales'
            ],
            playersLimit: 5
        },
        {
            squadId: 3,
            squadName: 'squad 3',
            ageRestriction: '1000+',
            rankRestriction: 'bronze 3 +',
            description: 'teste',
            players: [
                'eu'
            ],
            playersLimit: 3
        }
    ]

    return(
        <>
            <View style={styles.view}>
            <Header />
            <ScrollView style={styles.scrollView} nestedScrollEnabled={true} 
                contentContainerStyle={{alignItems: "center"}}>
            <Text style={styles.header}> Your squads </Text>
                <SelectorGroup />
                    <View style={styles.squadCardView}>
                    {squadList.map(squad => (
                        <SquadCard 
                            key={squad.squadId}
                            name={squad.squadName}
                            age={squad.ageRestriction}
                            rank={squad.rankRestriction}
                            description={squad.description}
                            players={squad.players}
                            playersLimit={squad.playersLimit}/>
                    ))}
                    </View>
                <Button 
                    title={'Create a new Squad'}
                    textColor={'#ffffff'}/>
                <Button 
                    title={'Find a squad'}
                    textColor={'#ffffff'}/>
                <Footer />
            </ScrollView>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d2452'
    },  
    scrollView:{
        backgroundColor: '#1d2452',
        marginTop: 75,
        width: '100%'
    },
    header:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25
    },
    squadCardView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    }
})