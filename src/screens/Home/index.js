import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useTranslation } from 'react-i18next';

const HomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [orientation, setOrientation] = useState(
    Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
  );

  const isPortrait = orientation === 'portrait';

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const updateOrientation = () => {
      const newOrientation = Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape';
      setOrientation(newOrientation);
    };

    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')}
      resizeMode="cover"
      style={tw`flex-1 justify-center items-center`}
    >
      <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
        <View style={tw`absolute top-5 right-5 z-10`}>
          <TouchableOpacity onPress={toggleLanguage}>
            <Text style={tw`text-white font-bold`}>
              {language === 'en' ? 'EN' : 'PT'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-4xl font-bold text-center mb-4 text-white`}>
            {t('RecifeVivo')}
          </Text>
          <TouchableOpacity
            style={tw`bg-blue-600 py-3 px-6 rounded-lg my-2`}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={tw`text-white font-bold`}>
              {t('do_login')}
            </Text>
          </TouchableOpacity>
          <Text style={tw`mt-2 text-gray-400 text-white`}>
            {t('cadastro')}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={tw`text-blue-600 font-bold`}>
              {t('signup')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
