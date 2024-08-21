import React, { useState } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { auth } from './Firebase';
import {  signInWithEmailAndPassword} from 'firebase/auth';





const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
   
   
    const handleSignIn = () => {
        // performing fields validation
        if (!email.trim() || !password.trim()) {
            Alert.alert('Validation Error', 'Please fill in all fields.');
            return;
        }

        //validating authorized user
        
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                //successful sign in
                Alert.alert('Sign in successful.');
                navigation.navigate('Home');
            })
            .catch((error) => {
                Alert.alert('Sign in failed', 'Invalid email or password.');
            });
    };

    //function to navigate to sign up page if needed
    const handleCreateAccount = () => {
        navigation.navigate('SignUp');
    };
    

    return (
        <ImageBackground source={require('../assets/skin.jpg')} style={styles.container}>
            <View style={styles.titleContainer}>
             <Text style={styles.appName}>Cash Track</Text>
            </View>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                
                
 
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fff',
        opacity: 0.7,
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 6,
        marginBottom: 21,
        paddingHorizontal: 8,
    },
    titleContainer: {
        marginBottom: 50,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    buttonContainer: {
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign:'center',
    },
    policyContainer: {
        marginTop: 21,
    },
    policyText: {
        color:'white',
        textAlign:'center',
        marginTop:15,
        textDecorationLine:'underline',
    },
    
});

export default SignInScreen;