import React, { Component } from 'react'
import{
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Landing = ({ navigation }) =>{
    return(
        <View style={{width:windowWidth, height:windowHeight, justifyContent:'center', alignItems:'center'}}>
            <View style={{justifyContent:'center', alignItems:'center', marginBottom:windowHeight*0.05}}>
                <Image style={{tintColor: '#5ea33a',}} source={require('../images/icon1.png')}/>
            </View>
            <View>
                <Text style={{textAlign:'center', fontSize: 17, color: '#5ea33a',margin:30}}>Welcome to our restaurant</Text>
                <Text style={{textAlign:'center', fontSize: 17, width: windowWidth*0.7}}>Order food and make reservations with one click.</Text>
            </View>
            <View style={{margin:windowHeight*0.1}}>
            <TouchableOpacity style={{backgroundColor:'#5ea33a', justifyContent:'center', alignItems:'center', borderRadius:26.5, width: windowWidth*0.7, height:windowHeight*0.08}} onPress={() => {navigation.navigate('Login')}}>
                <Text style={{color:'white'}}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center', borderWidth:1, borderRadius:26.5, width: windowWidth*0.7, height:windowHeight*0.08, marginTop:windowHeight*0.04}} onPress={() => {navigation.navigate('SignUp')}}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Landing;