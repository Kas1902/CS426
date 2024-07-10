import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import HeaderWithChevron from '../../components/HeaderWithChevron/HeaderWithChevron';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCameraAlt} from '@fortawesome/free-solid-svg-icons';

const PersonalInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <HeaderWithChevron
        title={'Personal Information'}
        navigation={navigation}
      />
      <View style={style.avatar}>
        <Image
          source={require('../../assets/images/Profile/Avatar.png')}
          style={style.avatarImage}
        />
        <Pressable style={style.camera}>
          <FontAwesomeIcon icon={faCameraAlt} size={24} color={'#050505'} />
        </Pressable>
      </View>
      <View style={style.inputContainer}>
        <View style={style.input}>
          <InputWithLabel label="First Name" />
        </View>
        <View style={style.input}>
          <InputWithLabel label="Last Name" />
        </View>
        <View style={style.input}>
          <InputWithLabel label="Phone" />
        </View>
        <View style={style.input}>
          <InputWithLabel label="Email" />
        </View>
      </View>
      <TouchableOpacity
        style={{...style.saveButton}}
        onPress={() => navigation.goBack()}>
        <Text style={{...style.save}}>Save changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PersonalInfo;
