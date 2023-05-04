import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [currentInput,setCurrentInput]=useState('');
  const [taskList,setTaskList]=useState([]);


  const setInput=(text)=>{
    setCurrentInput(text);
  }
  const buttonClickFunction = async () => {
    let data=await AsyncStorage.getItem('tasks');
    if(!data){
      await AsyncStorage.setItem('tasks',JSON.stringify([currentInput]));
      setTaskList([currentInput]);
    }
    else{
      let data_array=JSON.parse(data);
      data_array.push(currentInput);
      await AsyncStorage.setItem('tasks',JSON.stringify(data_array));
      setTaskList(data_array);
    }
  }
  useEffect(async()=>{
    let tasks=await AsyncStorage.getItem('tasks');
    tasks?setTaskList(JSON.parse(tasks)):setTaskList([]);
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* {
            taskList.forEach((ind,ele)=>{
              <Task style={styles.singleitem} text={ele} />
            })
          } */}
          <Task style={styles.singleitem} text={'This is task2'} />
          <Task style={styles.singleitem} text={'This is task4'} />
          <Task style={styles.singleitem} text={'This is task3'} />
        </View>
      </View>
      <View style={styles.inputcontainer}>
        <View style={{ width: '70%' }}>
          <TextInput style={styles.inputfield} editable placeholder='Type your text here...' placeholderTextColor={'gray'}  onChangeText={setInput}>{currentInput}</TextInput>
        </View>
        <View>
          <TouchableOpacity style={styles.submitbutton} onPress={buttonClickFunction}><Text style={styles.addtext}>Add</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%",
    height: 50,
  },
  inputfield: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    color: 'black',
    paddingHorizontal: 10,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: 'space-between'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 10,
  },
  singleitem: {
    marginVertical: 10,
    backgroundColor: 'blue',
  },
  submitbutton: {
    height:50,
    width:60,
    backgroundColor: 'yellow',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  addtext:{
    fontSize:20,
  }
});

