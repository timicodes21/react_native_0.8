import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from '@/app/providers/theme';
import AppNavigationContainer from '@/app/navigators/AppNavigationContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/constants/queryClient';
import { ToastProvider } from '@/app/providers/toast';
import { LanguageProvider } from '@/app/providers/i18n';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <LanguageProvider>
            <ToastProvider>
              <QueryClientProvider client={queryClient}>
                <AppNavigationContainer />
              </QueryClientProvider>
            </ToastProvider>
          </LanguageProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
