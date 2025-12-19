import React from 'react';
import { View } from 'react-native';
import { LoadingSpinner } from '@components';
import { ThemeProvider } from '@theme/ThemeProvider';
import { SPINNER_SIZES } from '@constants';
import { inlineStyles } from '../common/styles';

export default {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
};

export const Default = () => (
  <ThemeProvider>
    <View style={inlineStyles.primaryBackground}>
      <LoadingSpinner />
    </View>
  </ThemeProvider>
);

export const CustomColor = () => (
  <ThemeProvider>
    <View style={inlineStyles.darkContainerBackground}>
      <LoadingSpinner color="#FFD700" />
    </View>
  </ThemeProvider>
);

export const LargeSize = () => (
  <ThemeProvider>
    <View style={inlineStyles.primaryBackground}>
      <LoadingSpinner size={SPINNER_SIZES.large} />
    </View>
  </ThemeProvider>
);
