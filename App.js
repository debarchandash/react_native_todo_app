import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button, Alert } from 'react-native';
import Task from './components/Task';


export default function App() {

  const buttonClickFunction=()=>{
    Alert.alert('Alert Title', 'Text added successfully', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <Task style={styles.singleitem} text={'This is task1'}/>
          <Task  text={'This is task2'}/>
          <Task  text={'This is task4'}/>
          <Task  text={'This is task3'}/>
        </View>
      </View>
      <View style={styles.inputcontainer}>
        <View style={{width:'70%'}}>
        <TextInput style={styles.inputfield} editable placeholder='Type your text here...' placeholderTextColor={'gray'}/>
        </View>
        <View>
        <Button color="red" onPress={buttonClickFunction}  title='Add'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer:{
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:"100%",
    height:50,
  },
  inputfield:{
    borderRadius:10,
    backgroundColor:"#FFF",
    color:'black',
    paddingHorizontal:10,
    height:50,
  },
  container: {
    flex:1,
    backgroundColor: '#E8EAED',
    justifyContent:'space-between'
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:10,
  },
  singleitem:{
    marginVertical:10,
    backgroundColor:'blue',
  }
});

