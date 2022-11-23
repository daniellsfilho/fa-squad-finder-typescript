import { StyleSheet, View } from "react-native";
import Selector from "../selector/selector";

export default function SelectorGroup(){

    let ValBgColor = 'rgba(217, 217, 217, 0.3)'
    let BgColor = 'rgba(217, 217, 217, 0.3)'

    function activateVal(){
        ValBgColor = '#e51c44'
        BgColor = 'rgba(217, 217, 217, 0.3)'
    }

    function deactivateVal(){
        ValBgColor = 'rgba(217, 217, 217, 0.3)'
    }

    return(
        <View style={styles.selectorGroup}>
            <Selector title={'Valorant'} onPress={activateVal()} bgColor={ValBgColor}/>
            <Selector title={'Not Avaiable'} bgColor={BgColor}/>
            <Selector title={'Not Avaiable'} bgColor={BgColor}/>
        </View>        
    )
}

const styles = StyleSheet.create({
    selectorGroup:{
        flexDirection: "row",
        marginTop: 30
    }
})