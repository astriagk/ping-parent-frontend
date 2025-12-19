import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, Text, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authStorage } from '@utils';
import { APP_NAME, APP_VERSION } from '@config';
import { Logo, LoadingSpinner } from '@components';
import { verifyToken } from '@services/auth';
import { useTheme } from '@theme/ThemeProvider';
import makeStyles from './styles';

const FADE_IN_MS = 300;
const VERIFY_TIMEOUT_MS = 5000;

export default function Splash() {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const fade = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowDimensions();
  const styles = makeStyles(theme);

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: FADE_IN_MS,
      useNativeDriver: true,
    }).start();
    (async () => {
      try {
        const token = await authStorage.getToken();
        const verifier = verifyToken(token);
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('timeout')), VERIFY_TIMEOUT_MS),
        );
        const res = await Promise.race([verifier, timeout]);

        if (res && (res as any).valid) {
          Animated.timing(fade, {
            toValue: 0,
            duration: FADE_IN_MS,
            useNativeDriver: true,
          }).start(() => {
            navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
          });
        } else {
          Animated.timing(fade, {
            toValue: 0,
            duration: FADE_IN_MS,
            useNativeDriver: true,
          }).start(() => {
            navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
          });
        }
      } catch (err: any) {
        // Token verification failed - silently navigate to login
        Animated.timing(fade, {
          toValue: 0,
          duration: FADE_IN_MS,
          useNativeDriver: true,
        }).start(() => {
          navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        });
      }
    })();
  }, [fade, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.center,
          { opacity: fade, width: Math.max(width, height) },
        ]}
      >
        <Logo size={120} />
        <Text style={styles.appName}>{APP_NAME}</Text>
        <View style={styles.spacer} />
        <LoadingSpinner animating={loading} />
      </Animated.View>

      <Text style={styles.version}>v{APP_VERSION}</Text>
    </View>
  );
}
