import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image} from 'react-native';
import * as React from 'react'
import Posts from './temp_posts.json'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Card } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends React.Component{
    renderItem=({item})=>{
        return(
            <View>
                <Card style={{margin:20,backgroundColor:'#2e2d2d'}}>
                    <View style={{display:'flex',flexDirection:'row',margin:20}}>
                    <Text style={{fontSize:20,fontWeight:500,color:'white'}}>{item.author}</Text>
                    <Image style={{width:30,height: 30,marginLeft:15,borderRadius:20}} source={require('./assets/profile_img.png')}/>
                    </View>
                    <Text style={{marginLeft:20,marginBottom:15,color:'white'}}>{item.caption}</Text>
                    
                    <Card.Content>
                    <Card.Cover source={require('./assets/post.jpeg')} />
                    </Card.Content>
                    <Card.Actions>
                        <View style={{width:'100%'}}>
                            <TouchableOpacity style={{backgroundColor:'red',width:150,display:'flex',flexDirection:'row',borderRadius: 25, height: 40, alignSelf: 'center', justifyContent:'center',alignItems:'center'}}>
                                <Ionicons name='heart' color={'white'} size={RFValue(20)}/>
                                <Text style={{color:'white',margin: 5,fontSize:20}}>12K</Text>
                            </TouchableOpacity>
                        </View>
                    </Card.Actions>
                </Card>
           
            </View>
        )
      }
    render(){
        return (
            <View>
                <FlatList 
                keyExtractor={this.keyExtractor}
                data={Posts}
                renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
