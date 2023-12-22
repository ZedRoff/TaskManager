import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main = () => {
    return (
        <View>
           
            <View style={styles.container}>
                <Text style={styles.description}>
                    Welcome to the Chat App!
                    This app allows you to connect and chat with people from all around the world.
                    Start a conversation, share your thoughts, and make new friends.
                    Join the chat community today!
                </Text>
            </View>
        
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Main;
