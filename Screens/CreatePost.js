import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView} from 'react-native';
import * as React from 'react'
import { Dropdown } from 'react-native-element-dropdown';

export default class CreateStory extends React.Component{
  constructor(){
    super()
    this.state = {
      open: false,
      value: 'image_1',
      finalImg: require('../assets/image_1.jpg')
    }
  }
  
  setImage=(value)=>{

    switch(value['value']){
      case 'image_1': this.setState({finalImg: require('../assets/image_1.jpg')})
      break;
      case 'image_2': this.setState({finalImg: require('../assets/image_2.jpg')})
      break;
      case 'image_3': this.setState({finalImg: require('../assets/image_3.jpg')})
      break;
      case 'image_4': this.setState({finalImg: require('../assets/image_4.jpg')})
      break;
      case 'image_5': this.setState({finalImg: require('../assets/image_5.jpg')})
      break;
    }
  }

  render(){
    var images = [
      {label: 'Image 1', value: 'image_1'},
      {label: 'Image 2', value: 'image_2'},
      {label: 'Image 3', value: 'image_3'},
      {label: 'Image 4', value: 'image_4'},
      {label: 'Image 5', value: 'image_5'},
    ]
    
        return (
            <View style={{backgroundColor: 'black',flex:1,alignItems:'center'}}>
                <Text>Create Post Screen</Text>
                <Image source={this.state.finalImg} style={{width:'90%',height:200,resizeMode:'cover',borderRadius:25}}></Image>
                <Dropdown 
                  data={images}
                  labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={this.state.value}
        onChange={(value)=>{
          this.setState({value: value})
          this.setImage(value)
        }}
        maxHeight={300}
        activeColor='white'
        style={{borderColor:'white',borderWidth:2,borderRadius:20,width:'90%',marginTop:20}}
        selectedTextStyle={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center'
        }}
                />
              <ScrollView style={{flex:1,width:'90%',marginTop:20}}>
                <TextInput numberOfLines={4} multiline placeholder='Enter Caption...' placeholderTextColor={'white'} style={{color:'white',borderWidth:2,borderColor:'white',width:'100%',height:40,borderRadius:20,paddingLeft:10}}></TextInput>
              </ScrollView>
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
