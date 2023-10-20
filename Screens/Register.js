import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Alert} from 'react-native';
import * as React from 'react'
import database from '../config';
import firebase from 'firebase'

export default class Register extends React.Component{

    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password:''
        }
    }

    submit = ()=>{
         firebase.auth()
         .createUserWithEmailAndPassword(this.state.username,this.state.password)
         .then((userCredential)=>{
            Alert.alert('User Registered')
         })
         .catch(error =>{
            Alert.alert(error.message)
         })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{color: 'white',fontSize: 50}}>Register Screen</Text>
                <TextInput style={styles.input} placeholder='First Name' value={this.state.firstName} onChange={(text)=>{this.setState({firstName: text})}}/>
                <TextInput style={styles.input} placeholder='Last Name' value={this.state.lastName} onChange={(text)=>{this.setState({lastName: text})}}/>
                <TextInput style={styles.input} placeholder='Username' value={this.state.username} onChange={(text)=>{this.setState({username: text})}}/>
                <TextInput style={styles.input} placeholder='Password' value={this.state.password} onChange={(text)=>{this.setState({password: text})}}/>
                <TouchableOpacity style={{borderRadius: 20, backgroundColor: 'white', padding: 5, width: '50%', alignItems: 'center'}} onPress={()=>{this.submit()}}><Text>Submit</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderRadius: 20,
    borderWidth:5,
    backgroundColor: 'white',
    width: '50%'
  }
});
