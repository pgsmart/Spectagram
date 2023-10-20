import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Alert } from 'react-native';
import * as React from 'react'
import * as Font from 'expo-font'
import firebase from 'firebase';

var customFont = {
  'Title' : require('../assets/fonts/Flicker.ttf')
}
export default class Login extends React.Component{

  constructor(){
    super();
    this.state = {
      fontsLoaded: false,
      email: '',
      password: ''
    }
  }

  loadFonts = ()=>{
    Font.loadAsync(customFont)
    this.setState({
      fontsLoaded: true
    })
  }

  componentDidMount(){
    this.loadFonts()
  }

  login= async()=>{
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email,this.state.password)
    .then(()=>{
      this.props.navigation.replace('Drawer')
    })
    .catch(error => {
      Alert.alert(error.message)
    })
  }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30, color: 'white',fontFamily: 'Title'}}>Login</Text>
                <TextInput placeholderTextColor={'white'} placeholder='Username'/>
                <TextInput placeholderTextColor={'white'} placeholder='Password'/>
                <TouchableOpacity onPress={()=>{this.login()}} style={{borderRadius: 20, backgroundColor: 'white', padding: 5, width: '50%', alignItems: 'center'}}><Text >Login</Text></TouchableOpacity>
                <Text style={{color: 'white'}}>If you don't have account click to register</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}} style={{borderRadius: 20, backgroundColor: 'white', padding: 5, width: '50%', alignItems: 'center'}}><Text>Register</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'black'
  },
});
