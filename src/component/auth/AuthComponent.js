import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {readData} from '../../storage/Storage';
import {LoginDetails} from '../utils/constant';

const AuthComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    checkSignin();
  });

  const checkSignin = async () => {
    const data = await readData(LoginDetails);
    if (data) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Home',
            },
          ],
        }),
      );
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View>
      <Text />
    </View>
  );
};

export default AuthComponent;
