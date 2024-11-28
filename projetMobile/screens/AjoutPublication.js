import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import {StyleSheet, Text, TextInput,View, Button, TouchableOpacity} from 'react-native';
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";
import { Dimensions } from "react-native";
import MenuBas from "../components/MenuBas";
import CustomButton from "../components/CustomButton";

const {width, height} = Dimensions.get('window');

export default function Connexion(){
    const navigation = useNavigation();
    const[title, setTitle] = useState('');
    const[category, setCategory] = useState('');
    const[description, setDescription] = useState('');
    const[localisation, setLocalisation] = useState('');
    const[files, setFiles] = useState('');
    const[publicationAdd, setPublicationAdd] = useState(false);

    const[isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkColors : lightColors;

    const addPublication = () => {
        setPublicationAdd(true);
        navigation.navigate('Menu');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Titre</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <Text style={styles.title}>Catégorie</Text>
            <TextInput
                style={styles.input}
                value={category}
                onChangeText={setCategory}
            />
            <Text style={styles.title}>Description</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
            />
            <Text style={styles.title}>Fichiers joints</Text>
            <TextInput
                style={styles.input}
                value={files}
                onChangeText={setFiles}
            />
            


            <CustomButton
                title="Envoyer"
                onPress={addPublication}
            />


            {publicationAdd && (
                <text style={styles.informationText}>La publication a été envoyée</text>
            )}

            <MenuBas/>
            
        </View>
    );
}

