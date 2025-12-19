import React, { useState } from 'react';
import { View } from 'react-native';
import { ErrorToast } from '@components';
import { ThemeProvider } from '@theme/ThemeProvider';
import { inlineStyles } from '../common/styles';

export default {
  title: 'Molecules/ErrorToast',
  component: ErrorToast,
};

export const Default = () => (
  <ThemeProvider>
    <View style={inlineStyles.withHeight}>
      <ErrorToast message="Something went wrong!" />
    </View>
  </ThemeProvider>
);

export const WithCloseButton = () => {
  const [visible, setVisible] = useState(true);

  return (
    <ThemeProvider>
      <View style={inlineStyles.withHeight}>
        {visible && (
          <ErrorToast
            message="This error can be dismissed"
            onClose={() => setVisible(false)}
          />
        )}
      </View>
    </ThemeProvider>
  );
};

export const LongMessage = () => (
  <ThemeProvider>
    <View style={inlineStyles.withHeight}>
      <ErrorToast
        message="This is a very long error message that demonstrates how the toast handles multiple lines of text gracefully."
        onClose={() => {}}
      />
    </View>
  </ThemeProvider>
);
