import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/header/header";
import ProfileCard from "../../components/profileCard/profileCard";
import StatsTab from "../../components/statsTab/statsTab";
import { SessionController } from "../../session/sessionController";

export default function ProfilePage({ navigation }: any){

    const [username, setUsername] = useState('')
    const [age, setAge]: any = useState()
    const [rating, setRating]: any = useState()

    const getData = async () =>{
        const sessionController: SessionController = new SessionController()
        const resultName = await sessionController.getUserName()
        const resultAge = await sessionController.getUserAge()
        const resultRating = await sessionController.getUserRating()
        setUsername(resultName)
        setAge(resultAge)
        setRating(resultRating)
    }

    getData()
    
    return(
        <>
            <View style={styles.view}>
                <Header navigation={navigation}/>
                <ProfileCard
                    username = {username}
                    age = {age}
                    rating = {rating}
                    navigation = {navigation}/>
                <StatsTab />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        backgroundColor: '#1d2452',
        alignItems: 'center',
        justifyContent: 'center',
    }
})