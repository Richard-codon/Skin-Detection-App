import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Skin Disease Detector</Text>
            <Button title="Capture Image" onPress={() => navigation.navigate('Capture Image')}/>
            <Button title="Upload Image" onPress={() => navigation.navigate('Upload Image')}/>
            <Button title="View History" onPress={() => navigation.navigate('History')}/>
            <Button title="Settings" onPress={() => navigation.navigate('Settings')}/>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        marginBottom:21,
    },

});


export default HomeScreen;