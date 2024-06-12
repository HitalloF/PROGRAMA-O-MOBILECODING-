import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Accelerometer } from 'expo-sensors';

const SpeedScreen = ({ navigation }) => {
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(0);

    const accelerometerSubscription = Accelerometer.addListener(data => {
      setAccelerometerData(data);
    });

    return () => {
      accelerometerSubscription && accelerometerSubscription.remove();
    };
  }, []);

  const calculateSpeed = ({ x, y, z }) => {
    const speed = Math.sqrt(x * x + y * y + z * z);
    return speed.toFixed(2);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-4xl font-bold text-black`}>
          Speed: {calculateSpeed(accelerometerData)} m/s²
        </Text>
      </View>
    </View>
  );
};

export default SpeedScreen;
