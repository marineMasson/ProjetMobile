import Connexion from '../screens/Connexion';
import Inscription from '../screens/Inscription';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function TabNavigator(){
    return (
        <Stack.Navigator
            initialRouteName='Tabs/Connexion'
            screenOptions={{
                headerShown: false,
            }}>
        
            <Stack.Screen
                initialParams={{
                screen: 'Tabs/Connexion',
                }}
                options={{
                    unmountOnBlur:true,
                }}
                name = 'Connexion'
                component={Connexion}
            />
            <Stack.Screen
                initialParams={{
                    screen: 'Tabs/Inscription',
                    }}
                    options={{
                        unmountOnBlur:true,
                    }}
                    name = 'Inscription'
                    component={Inscription}
            />

        </Stack.Navigator>
    )
}