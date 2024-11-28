import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from '../components/SearchBar'
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";


export default function Menu () {
    const[isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkColors : lightColors;
    return(
        <Text>Hello</Text>
    )
}

