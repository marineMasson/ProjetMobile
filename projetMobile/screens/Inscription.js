import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import {StyleSheet, Text, TextInput,View, Button, TouchableOpacity} from 'react-native';
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";
import CustomButton from "../components/CustomButton";

export default function Inscription(){
    const navigation = useNavigation();
    const[prenom, setPrenom] = useState('');
    const[nom, setNom] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmation, setConfirmation] = useState('');

    const[isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkColors : lightColors;
    
    return(
        <View style={styles.container}>
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

            <Text style={styles.title}>Confirmer mot de passe</Text>
            <TextInput
                style={styles.input}
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