import { View, Text, Button } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/shared/components/ScreenWrapper';
import { showToast } from '@/app/providers/toast';

const Login = () => {
  return (
    <ScreenWrapper style={{ backgroundColor: '#FFFFFF', paddingTop: 100 }}>
      <View>
        <Text>Login</Text>
      </View>
      <Button
        title="Show toast"
        onPress={() =>
          showToast({
            message: 'Hello',
          })
        }
      />
    </ScreenWrapper>
  );
};

export default Login;
