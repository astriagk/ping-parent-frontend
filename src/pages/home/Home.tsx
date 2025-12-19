import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import makeStyles from './styles';

export default function Home() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}
