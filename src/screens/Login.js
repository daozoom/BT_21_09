import React, { Component, useState } from 'react'
import{
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Login = ({navigation}) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        try {
          // Lấy mật khẩu từ AsyncStorage dựa trên email
          const storedPassword = await AsyncStorage.getItem(email);
    
          if (storedPassword === null) {
            Alert.alert('Email không tồn tại');
            return;
          }
    
          // So sánh mật khẩu nhập vào với mật khẩu lưu trữ
          if (password === storedPassword) {
            Alert.alert('Đăng nhập thành công');
            // Thực hiện chuyển hướng hoặc các hoạt động cần thiết sau khi đăng nhập thành công
          } else {
            Alert.alert('Mật khẩu không chính xác');
          }
        } catch (error) {
          console.error('Lỗi đăng nhập:', error);
        }
      };

    return(
        <View style={{width:windowWidth*1,height:windowHeight*1}}>
            <TouchableOpacity onPress={() => { navigation.goBack()}} style={{width: windowWidth*1, height:windowHeight*0.1}}>
                <Image source={require('../images/back.png')} style={{marginTop: 40, width:'15%',height:'60%', resizeMode:'contain'}}/>
            </TouchableOpacity>
            <View style={{width: windowWidth*0.2, height:windowHeight*0.1,marginTop: 40, marginLeft: 17, justifyContent:'center'}}>
                <Text style={{color:'#5EA33A', fontSize: 20, fontWeight:'400'}}>
                    Sign In
                </Text>
            </View>
            <View style={{width: windowWidth*1, height:windowHeight*0.2, alignItems:'center'}}>
                <TextInput style={{width: '80%', height:'50%',borderWidth: 1, borderRadius:40, paddingLeft: 15, fontSize: 17 , borderColor:'#C0C0C0'}} placeholder='Email or phone number' value={email} onChangeText={(text) => setEmail(text)}/>
                
                <TextInput style={{width: '80%', height:'50%',borderWidth: 1, borderRadius:40, paddingLeft: 15, fontSize: 17, marginVertical:20, borderColor:'#C0C0C0'}} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}/>
            </View>
            <View style={{flex: 1,alignItems:'center', marginTop: 50}}>
                <TouchableOpacity style={{backgroundColor:'#5ea33a', width:'65%', height: '18%', borderRadius: 40, justifyContent:'center', alignItems:'center'}} onPress={handleLogin}>
                    <Text style={{fontSize: 17, color:'white'}}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <Text style={{marginVertical: 20}}>OR</Text>
                <TouchableOpacity style={{backgroundColor:'#344d91', width:'65%', height: '18%', borderRadius: 40, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize: 17, color:'white'}}>
                        Facebook Login
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login;