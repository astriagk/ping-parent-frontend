import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import ErrorBoundary from './src/components/ErrorBoundary';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppContent />
        </ErrorBoundary>
      </Provider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
