import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
//import styles from '../styles/globalStyles';
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";

const[isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkColors : lightColors;


export default function CustomButton({title, onPress}){
    return(
       <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
       </TouchableOpacity>
    )
    
}