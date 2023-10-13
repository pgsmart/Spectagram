import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native';
import * as React from 'react'
import PostCard from '../PostCard';
import Posts from '../temp_posts.json'
import * as Font from 'expo-font'

var customFont = {
  'Title' : require('../assets/fonts/Flicker.ttf')
}

export default class Feed extends React.Component{

  constructor(){
    super();
    this.state = {
      fontsLoaded: false
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

  renderItem=({item})=>{
    return(
        <View >
           <PostCard post={item} navigation={this.props.navigation}/>
        </View>
    )
  }

  render(){
    return (
        <View style={{backgroundColor:"black"}}>
          <View style={{display: 'flex', flexDirection: 'row',justifyContent:'center'}}>
            <Image style={{width:50,height:50,resizeMode:'contain',marginTop:25,marginRight:20}} source={require('../assets/logo.png')}/>
            <Text style={{color:'white', fontSize:40,marginTop:20,marginRight:40,fontFamily:'Title'}}>Spectagram</Text>
          </View>
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
