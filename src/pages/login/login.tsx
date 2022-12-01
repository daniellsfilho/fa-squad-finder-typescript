import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import  Button  from '../../components/button/button'
import ImageLogin from '../../components/imageLogin/imageLogin';
import * as AuthSession from 'expo-auth-session'
import axios from "axios";
import { URI } from "../../integration/uri";
import { User } from "../../models/User";
import { SessionController } from "../../session/sessionController";
import { api } from "../../integration/axios";

export default function LoginPage({ navigation } : any){

    const [user, setUser]: any = useState()

    const sessionController: SessionController = new SessionController()

    type AuthResponse = {
      type: string;
      params: {
        access_token: string
      }

    }

    async function UserExists(email: string) {
      try {
        const response = await axios.get(`${URI.USERBYEMAIL}/${email}`)
        const status = response.status
        if (status === 400) {
          return false
        } else {
          setUser(response.data)
          return true
        }
      } catch (error) {
        console.log(error)
      }
      
    }

    async function handleCreateUser(userCreate: User) {
      try {
        const response = await axios.post(URI.CREATEUSER, userCreate)
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
      const userExists: boolean | undefined = await UserExists(email)
      
      if(!userExists){
        
        const newUser: User = {
          name: userInfo.name,
          userName: "guest",
          email: userInfo.email,
          age: 18,
          rating: 50,
          photo: userInfo.picture
        }
        
        const userCreate = await handleCreateUser(newUser)
        await sessionController.setUserData(userCreate)
        
      } else {

        await sessionController.setUserData(user)
        const test = await sessionController.getUserData()
        console.log(test)
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
            width={300}
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
      color: '#fff',
      fontWeight: 'bold'
    }
  });
