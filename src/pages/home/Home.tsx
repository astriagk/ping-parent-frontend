import React from 'react';
import { View, Text, Alert, StatusBar } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { t } from '@locales';
import { TopBar } from '@components';
import makeStyles from './styles';

export default function Home() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const handleMenuPress = () => {
    // TODO: Implement drawer navigation or menu
    Alert.alert('Menu', 'Menu pressed');
  };

  const handleSearchPress = () => {
    // TODO: Navigate to search screen
    Alert.alert('Search', 'Search pressed');
  };

  const handleProfilePress = () => {
    // TODO: Navigate to profile screen
    Alert.alert('Profile', 'Profile pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
        translucent={false}
      />
      <View style={styles.statusBarSpacer} />
      <TopBar
        onMenuPress={handleMenuPress}
        onSearchPress={handleSearchPress}
        onProfilePress={handleProfilePress}
        testID="home-topbar"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{t('HOME.TITLE')}</Text>
      </View>
    </View>
  );
}
