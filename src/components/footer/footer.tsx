import { View, StyleSheet} from "react-native"

export default function Footer(){

    return(
        <>
            <View style={styles.footer}></View>
        </>
    )
}

const styles = StyleSheet.create({
    footer:{
        height: 25,
        backgroundColor: '#1d2452'
    }
})