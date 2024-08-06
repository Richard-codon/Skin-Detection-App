import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImageScreen = () => {
    const [image, setImage] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getPermissions();
    }, []);

    const pickImage = async () => {
        if (hasPermission === null) {
            Alert.alert('Permission status unknown', 'Please wait while we check for permissions.');
            return;
        }

        if (!hasPermission) {
            Alert.alert('Permission required', 'You need to grant permission to access the image library.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('Image Picker Result:', result); // Debugging line

        if (!result.canceled) {
            // Check if result.assets array exists and has at least one image
            if (result.assets && result.assets.length > 0) {
                setImage(result.assets[0].uri);
            } else {
                Alert.alert('No image selected', 'Please select an image to upload.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Image</Text>
            <Button title="Select Image" onPress={pickImage} />
            {image && (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Button title="Remove Image" onPress={() => setImage(null)} color="red" />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
    },
});

export default UploadImageScreen;
