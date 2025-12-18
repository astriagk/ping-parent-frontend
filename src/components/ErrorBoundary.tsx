import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // log error to service
    console.warn('Caught by ErrorBoundary', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.center}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
