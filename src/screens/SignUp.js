import React, { Component, useState } from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    Alert
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const SignUp = ({navigation}) => {

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
          // Kiểm tra xem email đã tồn tại trong AsyncStorage chưa
          const existingUser = await AsyncStorage.getItem(email);
    
          if (existingUser !== null) {
            Alert.alert('Thông báo', 'Email đã tồn tại');
            return;
          }
    
          // Lưu thông tin người dùng vào AsyncStorage
          await AsyncStorage.setItem(email, password);
    
          Alert.alert('Thông báo', 'Đăng ký thành công');
          // Thực hiện chuyển hướng hoặc các hoạt động cần thiết sau khi đăng ký thành công
        } catch (error) {
          console.error('Lỗi đăng ký:', error);
        }
      };

    return(
        <View style={{width: windowWidth*1, height: windowHeight*1}}>
            <TouchableOpacity onPress={() => { navigation.goBack('Landing')}} style={{width: windowWidth*1, height:windowHeight*0.1}}>
                <Image source={require('../images/back.png')} style={{marginTop: 40, width:'15%',height:'60%', resizeMode:'contain'}}/>
            </TouchableOpacity>
            <View style={{width: windowWidth*0.5, height:windowHeight*0.1,marginTop: 40, marginLeft: 17, justifyContent:'center'}}>
                <Text style={{color:'#5EA33A', fontSize: 20, fontWeight:'400'}}>
                    Create new account
                </Text>
            </View>
            <View style={{flex: 1, alignItems:'center'}}>
                <TextInput style={{marginTop:20, paddingLeft: 18, fontSize: 17, borderColor: '#C0C0C0', width: '80%', height: '9%', borderWidth: 1, borderRadius: 50}} placeholder='Full name' value={fullName} onChangeText={(text) => setFullName(text)}></TextInput>
                <TextInput style={{marginTop:20, paddingLeft: 18, fontSize: 17, borderColor: '#C0C0C0', width: '80%', height: '9%', borderWidth: 1, borderRadius: 50}} placeholder='Phone Number' value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)}></TextInput>
                <TextInput style={{marginTop:20, paddingLeft: 18, fontSize: 17, borderColor: '#C0C0C0', width: '80%', height: '9%', borderWidth: 1, borderRadius: 50}} placeholder='Email Address' value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput style={{marginTop:20, paddingLeft: 18, fontSize: 17, borderColor: '#C0C0C0', width: '80%', height: '9%', borderWidth: 1, borderRadius: 50}} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TouchableOpacity style={{marginTop:50, backgroundColor:'#344d91', width: '70%', height: '9%', alignItems: 'center', justifyContent: 'center', borderRadius: 50}} onPress={handleSignUp}>
                    <Text style={{fontSize: 17, color: 'white'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp;