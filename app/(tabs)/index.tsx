import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>

      <View style={styles.content}>
        <Text style={styles.title}>
          Nhập số điện thoại
        </Text>

        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Tiếp tục
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    flex:1,
    backgroundColor:'#fff'
  },

  header:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:20,
    marginLeft:20
  },

  content:{
    padding:20,
    marginTop:60
  },

  title:{
    fontSize:24,
    fontWeight:'600'
  },

  desc:{
    marginTop:15,
    color:'#666'
  },

  input:{
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    marginTop:30,
    paddingBottom:10,
    fontSize:18
  },

  placeholder:{
    color:'#aaa'
  },

  button:{
    marginTop:50,
    height:55,
    backgroundColor:'#eee',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },

  buttonText:{
    color:'#999',
    fontSize:18
  }
});