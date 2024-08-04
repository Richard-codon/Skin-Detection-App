import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const CaptureImageScreen = () => {
    return(
        <View style={styles.container}>
        <Text>Capture Image Screen</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});

export default CaptureImageScreen;
