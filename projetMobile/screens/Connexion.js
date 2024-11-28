import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import {StyleSheet, Text, TextInput,View, Button, TouchableOpacity} from 'react-native';
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";
import { Dimensions } from "react-native";
import CustomButton from "../components/CustomButton";

const {width, height} = Dimensions.get('window');

export default function Connexion(){
    const navigation = useNavigation();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const[isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkColors : lightColors;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.title}>Mot de passe</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <CustomButton
                title="Connexion"
                onPress={() => navigation.navigate('Menu')}
            />
            

            <Text style={styles.title}>Pas encore de compte ?</Text>

            <CustomButton
                title="Inscription"
                onPress={() => navigation.navigate('Inscription')}
            />

            
        </View>
    );
}

