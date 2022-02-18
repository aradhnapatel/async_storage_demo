import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {storeData} from '../../storage/Storage';
import {styles} from '../homeScreen/styles';
import {LOGINDETAIL, LoginDetails} from '../utils/constant';

const LoginComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();

  const handelLogin = () => {
    const detail = {
      name: name,
      email: email,
      city: city,
      age: age,
      mobile: mobile,
    };

    if (detail) {
      storeData(LoginDetails, JSON.stringify(detail));
      navigation.navigate('Home');
    } else {
      Alert.alert('Please field all value');
      navigation.navigate('Login');
    }
  };

  return (
    <>
      <View style={styles.headerStyle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          placeholder="Enter Name"
          onChangeText={nm => setName(nm)}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Enter Email"
          onChangeText={nm => setEmail(nm)}
        />
        <Text>City</Text>
        <TextInput
          style={styles.textInput}
          value={city}
          placeholder="Enter City"
          onChangeText={ct => setCity(ct)}
        />
        <Text>Age</Text>
        <TextInput
          style={styles.textInput}
          value={age}
          placeholder="Enter Age"
          onChangeText={ct => setAge(ct)}
        />
        <Text>Mobile</Text>
        <TextInput
          style={styles.textInput}
          value={mobile}
          placeholder="Enter Mobile No"
          onChangeText={mo => setMobile(mo)}
        />
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.btn} onPress={() => handelLogin()}>
            <Text style={styles.LoginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginComponent;
