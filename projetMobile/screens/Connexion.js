import { useNavigation } from "@react-navigation/native";
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput,View, Button, TouchableOpacity} from 'react-native';
import globalStyles from "../styles/globalStyles";

export default function Connexion(){
    const navigation = useNavigation();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Email</Text>
            <TextInput
                style={globalStyles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={globalStyles.title}>Mot de passe</Text>
            <TextInput
                style={globalStyles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity 
                style={globalStyles.button} 
                onPress={() => navigation.navigate('Menu')}
            >
                <Text style={globalStyles.buttonText}>Connexion</Text>
            </TouchableOpacity>

            <Text style={globalStyles.title}>Pas encore de compte ?</Text>

            <TouchableOpacity 
                style={globalStyles.button} 
                onPress={() => navigation.navigate('Inscription')}
            >
                <Text style={globalStyles.buttonText}>Inscription</Text>
            </TouchableOpacity>

            
        </View>
    );
}

