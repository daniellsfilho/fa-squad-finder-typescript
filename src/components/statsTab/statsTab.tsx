import { StyleSheet, Text, View } from "react-native";
import Selector from "../selector/selector";
import SelectorGroup from "../selectorGroup/selectorGroup";

export default function StatsTab(){
    return(
        <View style={styles.statsView}>
            <Text style={styles.header}> Your stats </Text>
            <SelectorGroup />
        </View>
    )
}

const styles = StyleSheet.create({
    statsView:{
        top: 40,
        alignItems: "center"
    },
    header:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})