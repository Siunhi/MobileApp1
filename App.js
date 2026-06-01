import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function App() {

  const [phone, setPhone] = useState('');

  const addNumber = (value) => {
    setPhone(phone + value);
  };

  const deleteNumber = () => {
    setPhone(phone.slice(0, -1));
  };

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*#', '0', '+']
  ];

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Đăng nhập</Text>

      <View style={styles.content}>
        <Text style={styles.title}>Nhập số điện thoại</Text>

        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            {phone || 'Nhập số điện thoại của bạn'}
          </Text>
        </View>

        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keyboard}>

        {keys.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.key}
                onPress={() => addNumber(item)}
              >
                <Text style={styles.keyText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.row}>
          <View style={styles.key}></View>

          <TouchableOpacity
            style={styles.key}
            onPress={deleteNumber}
          >
            <Text style={styles.keyText}>⌫</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.doneBtn}>
            <Text style={styles.doneText}>✓</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 80
  },

  title: {
    fontSize: 26,
    fontWeight: '600'
  },

  desc: {
    marginTop: 15,
    color: '#666',
    fontSize: 14,
    lineHeight: 20
  },

  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginTop: 30,
    paddingBottom: 10
  },

  inputText: {
    fontSize: 18,
    color: '#999'
  },

  continueBtn: {
    marginTop: 70,
    backgroundColor: '#eee',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  continueText: {
    color: '#999',
    fontSize: 20
  },

  keyboard: {
    backgroundColor: '#f3f4f5',
    paddingVertical: 10
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  key: {
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  keyText: {
    fontSize: 34,
    color: '#222'
  },

  doneBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#56c7bf',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },

  doneText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});