import React,{useState} from "react";
import {View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, ImageBackground} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const SignUpScreen = ({navigation}) => {
    //use states to handle fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //function to handle sign up
    const handleSignUp = () => {
        //if the fields for email and password are left empty, alert the user to fill the fields 
        if(!email || !password ){
            Alert.alert('Please enter both email and password');
            return;
        }
        //if the field is filled, then start loading
        setIsLoading(!isLoading);

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            setIsLoading(false);
            //show success messafe after load is complete
            Alert.alert('Registration successful, your account has been created!');
            //navigate to the sign in screen after successful registration
            navigation.navigate('SignIn');
        })
        .catch((error) =>{
            //call the set error function to print out the error message
            setError(error.message);
            setIsLoading(isLoading);
        });

    }; 

    //function to allow users to go back
    const handleBack = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ImageBackground source={require('../assets/skins.jpg')} style={styles.container}>
            <View style={styles.titleContainer}>
                 <Text style={styles.titleContainerText}>CREATE ACCOUNT</Text>
            </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none" 
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    keyboardType="email-address"
                    secureTextEntry
                />
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Go back</Text>
                </TouchableOpacity>
        </ImageBackground>

    );



};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 50,
    },
    titleContainerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    input: {
        backgroundColor: '#fff',
        opacity: 0.7,
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 6,
        marginBottom: 20,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 10,
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
    backButton: {
        marginBottom:21,
    },
    backButtonText: {
        color:'white',
        textAlign:'center',
        textDecorationLine:'underline',
        marginTop:15,
        fontSize:21,
    },
    
});





export default SignUpScreen;