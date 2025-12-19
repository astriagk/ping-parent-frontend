import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { ErrorBoundary } from './src/components';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Toggle between app and Storybook
const SHOW_STORYBOOK = __DEV__ && false; // Set to true to view Storybook

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  if (SHOW_STORYBOOK) {
    const StorybookUI = require('./storybook').default;
    return <StorybookUI />;
  }

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
