import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import tw from 'tailwind-react-native-classnames';

const MagnetometerScreen = () => {
  const [magnetometerData, setMagnetometerData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Magnetometer.setUpdateInterval(1000);

    const subscription = Magnetometer.addListener(data => {
      setMagnetometerData(data);
    });

    return () => subscription && subscription.remove();
  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-4xl font-bold text-black`}>Magnetômetro</Text>
      <Text style={tw`text-2xl text-black`}>X: {magnetometerData.x.toFixed(2)}</Text>
      <Text style={tw`text-2xl text-black`}>Y: {magnetometerData.y.toFixed(2)}</Text>
      <Text style={tw`text-2xl text-black`}>Z: {magnetometerData.z.toFixed(2)}</Text>
    </View>
  );
};

export default MagnetometerScreen;
