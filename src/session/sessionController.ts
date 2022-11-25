import { AsyncStorage } from "react-native";
import { User } from "../models/User";

export class SessionController {

    public async setUserData(userData: User){
        try {
            await AsyncStorage.setItem('user_data', (JSON.stringify(userData)))
        } catch (error) {
            console.log(error)
        }
        
    }

    public async getUserData(){
        try {
            const user_data = AsyncStorage.getItem('user_data')
            if(user_data) return user_data
            return null
        } catch (error) {
            console.log(error)
        }
        
    }

    public async getUserName(){
        try {
            const user_data = await this.getUserData()
            if(user_data){
                let username = JSON.parse(user_data).userName
                return username
            }
            return null
        } catch (error) {
            console.log(error)
        }
    }

    public async getUserAge(){
        try {
            const user_data = await this.getUserData()
            if(user_data){
                let age = JSON.parse(user_data).age
                return age
            }
            return null
        } catch (error) {
            console.log(error)
        }
    }

    public async getUserRating(){
        try {
            const user_data = await this.getUserData()
            if(user_data){
                let rating = JSON.parse(user_data).rating
                return rating
            }
            return null
        } catch (error) {
            console.log(error)
        }
    }

    public async getUserEmail(){
        try {
            const user_data = await this.getUserData()
            if(user_data){
                let email = JSON.parse(user_data).email
                return email
            }
            return null
        } catch (error) {
            console.log(error)
        }
    }

    public async getUserPhoto(){
        try {
            const user_data = await this.getUserData()
            if(user_data){
                let photo = JSON.parse(user_data).photo
                return photo
            }
        } catch (error) {
            console.log(error)
        }
    }
}