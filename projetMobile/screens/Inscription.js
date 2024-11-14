import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import {StyleSheet, Text, TextInput,View, Button, TouchableOpacity} from 'react-native';
import globalStyles from "../styles/globalStyles";

export default function Inscription(){
    const navigation = useNavigation();
    const[prenom, setPrenom] = useState('');
    const[nom, setNom] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmation, setConfirmation] = useState('');
    
    return(
        <View styles={globalStyles.container}>
            <Text style={globalStyles.title}>Nom</Text>
            <TextInput
                style={globalStyles.input}
                value={nom}
                onChangeText={setNom}
            />

            <Text style={globalStyles.title}>Prénom</Text>
            <TextInput
                style={globalStyles.input}
                value={prenom}
                onChangeText={setPrenom}
            />

            <Text style={globalStyles.button}>Email</Text>
            <TextInput
                style={globalStyles.input}
                value={email}
                onChangeText={setEmail}
            />

            <Text style={globalStyles.button}>Mot de passe</Text>
            <TextInput
                style={globalStyles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <Text style={globalStyles.button}>Confirmer mot de passe</Text>
            <TextInput
                style={globalStyles.input}
                value={confirmation}
                onChangeText={setConfirmation}
                secureTextEntry={true}
            />

            <TouchableOpacity 
                style={globalStyles.button} 
                onPress={() => navigation.navigate('Menu')}
            >
                <Text style={globalStyles.buttonText}>Inscription</Text>
            </TouchableOpacity>


        </View>
    )
    
}