import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import {StyleSheet, Text, TextInput,View, Button, TouchableOpacity} from 'react-native';
import globalStyles from "../styles/globalStyles";
import CustomButton from "../components/CustomButton";

export default function Inscription(){
    const navigation = useNavigation();
    const[prenom, setPrenom] = useState('');
    const[nom, setNom] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmation, setConfirmation] = useState('');
    
    return(
        <View style={globalStyles.container}>
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

            <Text style={globalStyles.title}>Confirmer mot de passe</Text>
            <TextInput
                style={globalStyles.input}
                value={confirmation}
                onChangeText={setConfirmation}
                secureTextEntry={true}
            />

            <CustomButton
                title="Inscription"
                onPress={() => navigation.navigate('Menu')}
            />

        </View>
    )
    
}