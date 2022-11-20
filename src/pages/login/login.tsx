import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import  Button  from '../../components/button/button'
import ImageLogin from '../../components/imageLogin/imageLogin';
import * as AuthSession from 'expo-auth-session'
import axios from "axios";
import { URI } from "../../integration/uri";
import { User } from "../../models/User";

export default function LoginPage({ navigation } : any){

    type AuthResponse = {
      type: string;
      params: {
        access_token: string
      }

    }

    async function UserExists(email: string) {
      const response = await axios.get(URI.GETUSERS)
      const users = await response.data
      users.forEach((user: any) => {
        if(user.email == email){
          return true
        } 
      });
      return false
    }

    async function handleCreateUser(user: User) {
      try {
        const response = await axios.post(URI.CREATEUSER, user)
        return response.data
      } catch (error) {
        console.log(error)
        window.alert('Erro')
      }
    }

    async function handleLogIn(){

      const CLIENT_ID = '438723730731-27e2u551qauejqhi3d8g06n023k3arq8.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@daniellsfilho/SquadFinder';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

      const token = params.access_token
      const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
      const userInfo = await response.json()
      const email = await userInfo.email
      const userExists: boolean = await UserExists(email)

      const user: User = {
        name: userInfo.name,
        userName: "guest",
        email: userInfo.email,
        age: 18,
        rating: 50,
        photo: userInfo.picture
      }

      if(!userExists){
        await handleCreateUser(user)
      }
      
      if(type === "success"){
        navigation.navigate('Home')
      }
    }

    return(
      <>
        <View style={styles.view}>
          <Text style={styles.text}>SQUAD{'\n'}FINDER</Text>
          <ImageLogin />
          <Button 
            onPress={handleLogIn}
            icon="social-google"
            title={'Entrar com o Google'}
            textColor={'#ffffff'}/>
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
  
    text:{
      fontSize: 40,
      color: '#fff'
    }
  });
