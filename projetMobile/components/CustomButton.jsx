import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import {useState} from 'react';
//import styles from '../styles/globalStyles';
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";

export default function CustomButton({title, onPress}){
    const[isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkColors : lightColors;
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
       </TouchableOpacity>
    )
    
}