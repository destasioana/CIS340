// Import necessary components from React and React Native
import React, { use, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

// Main App component
export default function App() {

  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState('');


  function addTask() { 

    if (taskInput.trim()) { 

        const updatedList = [...taskList, taskInput]; // ... creates a copy
        setTaskList(updatedList);

        setTaskInput('');
    }
  }

  function deleteTask(indexToDelete) { 

    const updatedList = [...taskList];

    updatedList.splice(indexToDelete, 1);

    setTaskList(updatedList);

  }

  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.input}
        placeholder="Enter a task"
        value={taskInput}
        onChangeText={function (text) {
          setTaskInput(text);
        }}
      />

        <Button title="Add Task" onPress={addTask}/>


        <FlatList
          data={taskList} // Data source for the list
          keyExtractor={function (item, index ) {
            return index.toString(); //Unique key for each item (using index)
          }}
          renderItem={function ({ item, index}) {
            return (
              <View style={styles.taskContainer}>
                <Text style={styles.taskContainer}>{item}</Text>

                <Button
                  title="Delete"
                  onPress={function() {
                    deleteTask(index);
                  }}
                />
              </View>

            );
          }}
        />
        
    </View>
  );



}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,              // Take up full screen height
    padding: 20,          // Padding inside the screen
    backgroundColor: '#fff'
  },
  input: {
    borderBottomWidth: 1, // Line under the input
    borderColor: '#999',
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',         // Arrange text and button side-by-side
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
});
