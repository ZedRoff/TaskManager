import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import axios from "axios";
import config from "./config.json";
import Footer from "./Footer";
import Header from "./Header";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [editedTaskDescription, setEditedTaskDescription] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/getAllTasks`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${config.apiUrl}/deleteTask/${taskId}`);
      setTasks(tasks.filter(task => task.uuid !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const startEditingTask = (taskId, taskTitle, taskDescription) => {
    setEditingTaskId(taskId);
    setEditedTaskTitle(taskTitle);
    setEditedTaskDescription(taskDescription);
  };

  const cancelEditingTask = () => {
    setEditingTaskId(null);
    setEditedTaskTitle("");
    setEditedTaskDescription("");
  };

  const saveEditedTask = async () => {
    try {
      await axios.put(`${config.apiUrl}/updateTask/${editingTaskId}`, {
        title: editedTaskTitle,
        description: editedTaskDescription
      });
      setTasks(tasks.map(task => {
        if (task.uuid === editingTaskId) {
          return {
            ...task,
            title: editedTaskTitle,
            description: editedTaskDescription
          };
        }
        return task;
      }));
      cancelEditingTask();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <ScrollView style={styles.centered}>
        {tasks.map((task, id) => (
          <View style={styles.taskContainer} key={id}>
            {editingTaskId === task.uuid ? (
              <>
                <TextInput
                  style={styles.editInput}
                  value={editedTaskTitle}
                  onChangeText={text => setEditedTaskTitle(text)}
                />
                <TextInput
                  style={styles.editInput}
                  value={editedTaskDescription}
                  onChangeText={text => setEditedTaskDescription(text)}
                />
                <TouchableOpacity onPress={saveEditedTask}>
                  <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={cancelEditingTask}>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.description}>{task.description}</Text>
                <TouchableOpacity onPress={() => startEditingTask(task.uuid, task.title, task.description)}>
                  <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(task.uuid)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        ))}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E"
  },
  centered: {
    flex: 1,
    alignSelf: "center",
    padding: 16,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#2E2E2E",
    width: "100%"
  },
  taskContainer: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  editButton: {
    color: "blue",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  deleteButton: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  editInput: {
    backgroundColor: "#fff",
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  saveButton: {
    color: "green",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  cancelButton: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Tasks;
