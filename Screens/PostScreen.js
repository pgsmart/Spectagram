import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import * as React from 'react'
import PostCard from '../PostCard';
import {Card } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class PostScreen extends React.Component{


    render (){
      
        return (
            <View style={styles.container}>
  
              <View>
            <Card onPress={()=>{this.props.navigation.navigate('PostScreen')}} style={{margin:20,backgroundColor:'#2e2d2d', flex:0.8, display:'flex',}}>
                <View style={{display:'flex',flexDirection:'row',margin:20}}>
                <Text style={{fontSize:20,fontWeight:500,color:'white'}}>{this.props.route.params.author}</Text>
                <Image style={{width:30,height: 30,marginLeft:15,borderRadius:20,}} source={require('../assets/profile_img.png')}/>
                </View>
                <Text style={{marginLeft:20,marginBottom:15,color:'white'}}>{this.props.route.params.caption}</Text>
                
                <Card.Content>
                <Card.Cover style={{marginTop:30}} source={require('../assets/post.jpeg')} />
                </Card.Content>
                <Card.Actions>
                    <View style={{width:'100%'}}>
                        <TouchableOpacity style={{backgroundColor:'red',width:150,display:'flex',flexDirection:'row',borderRadius: 25, height: 40, alignSelf: 'center', justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Ionicons name='heart' color={'white'} size={RFValue(20)}/>
                            <Text style={{color:'white',margin: 5,fontSize:20}}>12K</Text>
                        </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
       
        </View>
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
});
