import { StyleSheet, View } from "react-native";
import Button from "../button/button";

export default function ButtonGroup(props : any){

    const { navigation } = props

    function navigateToProfile(){
        navigation.navigate('Profile')
    }

    function navigateToSquads(){
        navigation.navigate('Squads')
    }

    function navigateToSearch(){
        navigation.navigate('SearchSquads')
    }

    return(
        <View style={styles.btnGroup}>
            <Button 
                onPress={navigateToProfile}
                title={'Perfil'}
                textColor={'#ffffff'}/>
            <Button 
                onPress={navigateToSquads}
                title={'Meus Squads'}
                textColor={'#ffffff'}/>
            <Button 
                onPress={navigateToSearch}
                title={'Encontre Squads'}
                textColor={'#ffffff'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btnGroup:{
        marginTop: 20
    }
})