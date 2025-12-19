import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import type { ErrorToastProps } from './types';
import { makeStyles } from './styles';

export default function ErrorToast({ message, onClose }: ErrorToastProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      {onClose ? (
        <TouchableOpacity onPress={onClose} style={styles.close}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
