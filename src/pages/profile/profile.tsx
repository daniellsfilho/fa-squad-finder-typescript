import { StyleSheet, View } from "react-native";
import Header from "../../components/header/header";
import ProfileCard from "../../components/profileCard/profileCard";
import StatsTab from "../../components/statsTab/statsTab";

export default function ProfilePage(){
    return(
        <>
            <View style={styles.view}>
                <Header />
                <ProfileCard />
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