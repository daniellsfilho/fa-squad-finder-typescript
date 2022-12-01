import { AsyncStorage } from "react-native";
import { Squad } from "../models/Squad";
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

    public async getUserId(){
        try {
            const user_data = await this.getUserData()
            if(user_data){
                let id = JSON.parse(user_data).id
                return id
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async setSquadData(squadData: Squad){
        try {
            await AsyncStorage.setItem('squad_data', (JSON.stringify(squadData)))
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadData(){
        try {
            const squad_data = await AsyncStorage.getItem('squad_data')
            if(squad_data) return squad_data
            return null
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadName(){
        try {
            const squad_data = await this.getSquadData()
            if(squad_data){
                const name = JSON.parse(squad_data).name
                return name
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadMembers(){
        try {
            const squad_data = await this.getSquadData()
            if(squad_data){
                const members = JSON.parse(squad_data).members
                return members
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadsMaxMembers(){
        try {
            const squad_data = await this.getSquadData()
            if(squad_data){
                const maxMembers = JSON.parse(squad_data).maxMembers
                return maxMembers
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadDescription(){
        try {
            const squad_data = await this.getSquadData()
            if(squad_data){
                const description = JSON.parse(squad_data).description
                return description
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadMinAge(){
        try {
            const squad_data = await this.getSquadData()
            if(squad_data){
                const minAge = JSON.parse(squad_data).minAge
                return minAge
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadMinRank(){
        try {
            const squad_data = await this.getSquadData()
            if(squad_data){
                const minRank = JSON.parse(squad_data).minRank
                return minRank
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getSquadId(){
        try {
            const squad_data = await this.getSquadData()
            if(squad_data){
                const id = JSON.parse(squad_data).id
                return id
            }
        } catch (error) {
            console.log(error)
        }
    }
}