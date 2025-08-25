import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from '@/app/providers/theme';
import AppNavigationContainer from '@/app/navigators/AppNavigationContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/constants/queryClient';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <AppNavigationContainer />
          </QueryClientProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
