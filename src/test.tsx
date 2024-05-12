import React from 'react';
import { View, Text } from 'react-native';

interface MyComponentProps {
  title: string;
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, message }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default MyComponent;