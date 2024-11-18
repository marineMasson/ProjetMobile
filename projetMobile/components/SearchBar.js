import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
// pour ajouter une icône à la barre de recherche

const SearchBar = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#ccc" style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || "Rechercher"}
        placeholderTextColor="#ccc"
      />
    </View>
  );
};