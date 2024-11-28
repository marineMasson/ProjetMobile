import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBas = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Menu');

    const handlePress = (tabName) => {
        setActiveTab(tabName); // Met à jour l'onglet actif
        navigation.navigate(tabName); // Navigation vers l'écran correspondant
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress('Menu')}>
                <Icon name="home" 
                size={30} 
                color={activeTab === 'Menu' ? '#356EF6' : '#a9a9a9'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('AjoutPublication')}>
                <Icon name="add-circle" 
                size={30} 
                color={activeTab === 'AjoutPublication' ? '#356EF6' : '#a9a9a9'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Utilisateur')}>
                <Icon name="person" 
                size={30} 
                color={activeTab === 'Utilisateur' ? '#356EF6' : '#a9a9a9'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#272E37',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#272E37',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default MenuBas;
