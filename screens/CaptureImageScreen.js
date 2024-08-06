import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';

export default function CaptureImageScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState(null); // State to store the photo URI
  const cameraRef = useRef(null); // Reference to the camera

  // Await user permission
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  // Ask user for permission, by providing a pressable option
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // Function to allow flip, front and back flip
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // Function to take a picture
  async function takePicture() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo.uri); // Update state with the photo URI
        Alert.alert('Photo Taken', 'The photo was successfully taken!');
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert('Error', 'An error occurred while taking the picture.');
      }
    }
  }

  // Returning JSX values
  return (
    <View style={styles.container}>
      {photoUri ? (
        // If photoUri is set, display the image, setting up a database to store the image will do, or perhaps the ML model predicts it straight away without saving
        <Image source={{ uri: photoUri }} style={styles.image} />
      ) : (
        // If no photo is taken, show the camera view
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: '100%', 
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
    justifyContent: 'space-between', 
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    flex: 1,
    width: '100%', 
    resizeMode: 'contain', 
  },
});
