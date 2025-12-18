import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ErrorToast({
  message,
  onClose,
}: {
  message: string;
  onClose?: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      {onClose ? (
        <TouchableOpacity onPress={onClose} style={styles.close}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    backgroundColor: '#b00020',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { color: '#fff', flex: 1 },
  close: { marginLeft: 8 },
  closeText: { color: '#fff', fontWeight: '700' },
});
