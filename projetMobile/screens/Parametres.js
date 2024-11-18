import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import {StyleSheet, Text, TextInput,View, Button, TouchableOpacity} from 'react-native';
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Connexion(){
    const navigation = useNavigation();
    const[nom, setNom] = useState('');
    const[prenom, setPrenom] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const[isDarkTheme, setIsDarkTheme] = useState(true);
    const[accountDeleted, setAccountDeleted] = useState(false);
    const styles = isDarkTheme ? darkColors : lightColors;

    const handleDeleteAccount = () => {
        setAccountDeleted(true);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Thème</Text>
            // faire le bouton pour changer couleur
            <Text style={styles.title}>Nom</Text>
            <TextInput
                style={styles.input}
                value={nom}
                onChangeText={setNom}
            />
            <Text style={styles.title}>Prénom</Text>
            <TextInput
                style={styles.input}
                value={prenom}
                onChangeText={setPrenom}
            />
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

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Utilisateur')}
            >
                <Text style={styles.buttonText}>Confirmer</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Connexion')}
            >
                <Text style={styles.buttonText}>Déconnexion</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonDelete} 
                onPress={handleDeleteAccount}
            >
                <Text style={styles.buttonText}>Supprimer le compte</Text>
            </TouchableOpacity>

            {accountDeleted && (
                <text style={styles.deleteText}>Le compte a été supprimé</text>
            )}
            
        </View>
    );
}

