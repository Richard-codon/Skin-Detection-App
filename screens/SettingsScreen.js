import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';

const SettingScreen = ({ navigation }) => {
    const handleSignOut = () => {
        Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        signOut(auth)
                            .then(() => {
                                Alert.alert('Sign out successful.');
                                navigation.navigate('SignIn');
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    signOutButton: {
        backgroundColor: '#c0392b',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
});

export default SettingScreen;