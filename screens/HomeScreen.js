import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground 
            source={require('../assets/background.jpg')} 
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Skin Disease Detector</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Capture Image')}>
                        <Icon name="camera" size={30} color="#fff" />
                        <Text style={styles.buttonText}>Capture Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Upload Image')}>
                        <Icon name="upload" size={30} color="#fff" />
                        <Text style={styles.buttonText}>Upload Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
                        <Icon name="history" size={30} color="#fff" />
                        <Text style={styles.buttonText}>View History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
                        <Icon name="cogs" size={30} color="#fff" />
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff', 
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        marginTop: 5,
        fontSize: 14,
        color: '#fff', 
    },
});

export default HomeScreen;
