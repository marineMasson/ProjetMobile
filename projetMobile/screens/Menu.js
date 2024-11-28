import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from '../components/SearchBar'
import globalStyles, { darkColors, lightColors } from "../styles/globalStyles";
import MenuBas from '../components/MenuBas';


export default function Menu () {
    const[isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkColors : lightColors;
    return (
        <View style={[styles.container]}>
            <Text>Hello</Text>
            <MenuBas />
        </View>
    );
}

