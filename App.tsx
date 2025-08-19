import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from '@/app/providers/theme';
import AppNavigationContainer from '@/app/navigators/AppNavigationContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigationContainer />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
