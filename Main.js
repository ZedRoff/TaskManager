import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';
import config from './config.json';

const Main = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (text) => {
        setTitle(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handleCreateTask = async () => {
        try {
            const response = await axios.post(config.apiUrl + "/createTask", { title, description });
            console.log(response.data);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Welcome to the TaskManager App!</Text>
            <Text style={styles.introText}>Manage your tasks efficiently and stay organized with TaskManager.</Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter title"
                    value={title}
                    onChangeText={handleTitleChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter description"
                    value={description}
                    onChangeText={handleDescriptionChange}
                />
                <Button
                    title="Create Task"
                    onPress={handleCreateTask}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    formContainer: {
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 15,
        backgroundColor: "white"
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    introText: {
        fontSize: 16,
        marginTop: 8
    },
});

export default Main;
