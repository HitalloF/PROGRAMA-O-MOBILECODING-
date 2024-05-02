import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-react-native-classnames';

const SignUpScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignUp = () => {
    navigation.replace('login');
  };

  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')}
      style={tw`flex-1 justify-center items-center`}
    >
      <View style={tw`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50`} />
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-3xl font-bold text-white mb-8`}>{t('signup')}</Text>
        <View style={tw`w-full max-w-md bg-gray-300 bg-opacity-50 rounded-lg p-4`}>
          <TextInput
            style={tw`w-full h-12 mb-4 border border-gray-400 rounded-lg pl-3 bg-white text-black`}
            placeholder={t('username')}
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={tw`w-full h-12 mb-4 border border-gray-400 rounded-lg pl-3 bg-white text-black`}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={tw`w-full h-12 mb-4 border border-gray-400 rounded-lg pl-3 bg-white text-black`}
            placeholder={t('password')}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />
          <Button
            title={t('signup')}
            onPress={handleSignUp}
            color="#3182CE"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;
