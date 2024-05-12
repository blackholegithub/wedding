import React from 'react';

interface MyComponentProps {
  title: string;
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, message }) => {
  return (
    <></>
  );
};

export default MyComponent;