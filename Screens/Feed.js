import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import * as React from 'react'
import PostCard from '../PostCard';

export default class Feed extends React.Component{


    render(){
      
        return (
            <View style={{backgroundColor:'black'}}>
               <PostCard/>
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
