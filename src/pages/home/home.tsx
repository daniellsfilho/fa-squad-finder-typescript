import { View, Text, StyleSheet} from "react-native";
import ButtonGroup from "../../components/buttonGroup/buttonGroup";
import Header from "../../components/header/header";
import ImageHome from "../../components/imageHome/imageHome";
import TextBox from "../../components/textBox/textBox";

export default function HomePage({ navigation } : any){
    return(
        <>
            <View style={styles.container}>
                <Header navigation={navigation}/>
                <TextBox />
                <ImageHome />
                <ButtonGroup 
                    navigation = {navigation}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1d2452',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text:{
      fontSize: 40,
      color: '#fff'
    }
});