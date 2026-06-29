import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const validatePhone = () => {
  if (phone.trim() === "") {
    alert(
      "Vui lòng nhập số điện thoại!"
    );
    return;
  }

  // Chỉ gồm 10 số, bắt đầu bằng số 0
  const phoneRegex = /^0\d{9}$/;

  if (!phoneRegex.test(phone)) {
    alert(
      "Số điện thoại không đúng định dạng!"
    );
    return;
  }

  Alert.alert(
    "Thành công",
    "Số điện thoại hợp lệ."
  );

};
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
          keyboardType="number-pad"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity
          style={[
          styles.button,phone.length > 0 && styles.buttonActive]}
          onPress={validatePhone}
        >
          <Text
            style={[
            styles.buttonText,phone.length > 0 && styles.buttonTextActive]}
          >
            Tiếp tục
          </Text>
        </TouchableOpacity>
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
  buttonActive: {
    backgroundColor: '#00C2A8',
  },

  buttonTextActive: {
    color: '#fff',
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