import Connexion from '../screens/Connexion';
import Inscription from '../screens/Inscription';
import Utilisateur from '../screens/Utilisateur';
import Menu from '../screens/Menu';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function TabNavigator(){
    return (
        <Stack.Navigator
            initialRouteName="Connexion"
            screenOptions={{
                headerShown: false,
            }}>
        
            <Stack.Screen
                name="Connexion"
                component={Connexion}
                options={{ unmountOnBlur: true }}
            />
            <Stack.Screen
                name="Inscription"
                component={Inscription}
                options={{ unmountOnBlur: true }}
        
            />
            <Stack.Screen
                name="Utilisateur"
                component={Utilisateur}
                options={{unmountOnBlur: true}}
            />
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{unmountOnBlur: true}}
            />

        </Stack.Navigator>
    )
}