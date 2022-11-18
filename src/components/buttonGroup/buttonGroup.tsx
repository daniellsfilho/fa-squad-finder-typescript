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
        navigation.navigate('Login')
    }

    return(
        <View style={styles.btnGroup}>
            <Button 
                onPress={navigateToProfile}
                title={'Profile'}
                textColor={'#ffffff'}/>
            <Button 
                onPress={navigateToSquads}
                title={'Squads'}
                textColor={'#ffffff'}/>
            <Button 
                onPress={navigateToSearch}
                title={'Search'}
                textColor={'#ffffff'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btnGroup:{
        marginTop: 20
    }
})