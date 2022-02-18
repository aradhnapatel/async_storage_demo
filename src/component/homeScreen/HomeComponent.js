/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {clearStorage, readData} from '../../storage/Storage';
import {styles} from './styles';

const HomeComponent = () => {
  const navigation = useNavigation();
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    const data = await readData('LoginDetails');

    setDetail(JSON.parse(data));
  };

  const onLogout = () => {
    navigation.navigate('Login');
    clearStorage();
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: '#E8F6EF'}]}>
      <View style={styles.rows}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'blue'}}>back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={() => onLogout()}>
          <Text style={{color: 'blue'}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.45, justifyContent: 'center', alignSelf: 'center'}}>
        <Text>email : {detail.email}</Text>
        <Text>mobile no : {detail.mobile}</Text>
        <Text>name : {detail.name}</Text>
        <Text>city : {detail.city}</Text>
        <Text>age : {detail.age}</Text>
      </View>
    </View>
  );
};

export default HomeComponent;
