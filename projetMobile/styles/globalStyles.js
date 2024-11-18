import { StyleSheet } from "react-native";


export const darkColors = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2028',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        backgroundColor: "#272E37",
        borderWidth: 1,
        borderRadius: 8,
    },
    button:{
        backgroundColor: "#162A5B",
        borderRadius: 8,
    },
    buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonDelete:{
        backgroundColor:"#FF2B2B",
        borderRadius: 8,
    },
    deleteText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#FF2B2B"
    }
});

export const lightColors = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        backgroundColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
    },
    button:{
        backgroundColor: "#E2EBFA",
        borderRadius: 8,
    },
    buttonText:{
        color: "#000",
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonDelete:{
        backgroundColor:"#FF2B2B",
        borderRadius: 8,
    },
    deleteText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#FF2B2B"
    }
});

   