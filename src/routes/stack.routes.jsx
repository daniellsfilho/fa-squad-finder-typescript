import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomePage from '../pages/home/home';
import LoginPage  from '../pages/login/login'
import ProfilePage from '../pages/profile/profile';
import SquadPage from '../pages/squads/squads';

const { Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='Login'
                component={LoginPage}
                options={{headerShown: false}}
            />
            <Screen
                name='Home'
                component={HomePage}
                options={{headerShown: false}}
            />
            <Screen 
                name='Profile'
                component={ProfilePage}
                options={{headerShown: false}}/>
            <Screen
                name='Squads'
                component={SquadPage}
                options={{headerShown: false}}/>
        </Navigator>
    )
}