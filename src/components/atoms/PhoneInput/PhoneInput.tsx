import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Text,
} from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { t } from '@locales';
import type { PhoneInputProps, Country } from './types';
import { makeStyles } from './styles';
import { COUNTRIES } from './countries';

export default function PhoneInput({
  value,
  onChangeText,
  onChangeCountry,
  placeholder,
  error,
  touched = false,
  disabled = false,
  testID,
  containerStyle,
  defaultCountry = 'US',
}: PhoneInputProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [selectedCountry, setSelectedCountry] = useState<Country>(
    COUNTRIES.find(c => c.code === defaultCountry) || COUNTRIES[0],
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setModalVisible(false);
    onChangeCountry?.(country);
  };

  const formatPhoneNumber = (text: string) => {
    // Remove all non-digits
    const cleaned = text.replace(/\D/g, '');

    // Format as (123) 456-7890 for US/CA
    if (selectedCountry.code === 'US' || selectedCountry.code === 'CA') {
      const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
      if (match) {
        const parts = match.slice(1).filter(Boolean);
        if (parts.length === 0) return '';
        if (parts.length === 1)
          return parts[0].length < 3 ? parts[0] : `(${parts[0]})`;
        if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`;
        return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
      }
    }

    return cleaned;
  };

  const handleTextChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    onChangeText(formatted);
  };

  const hasError = touched && error;

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[styles.inputContainer, hasError && styles.inputContainerError]}
      >
        <TouchableOpacity
          style={styles.countrySelector}
          onPress={() => setModalVisible(true)}
          disabled={disabled}
          testID={`${testID}-country-selector`}
        >
          <Text style={styles.flag}>{selectedCountry.flag}</Text>
          <Text style={styles.dialCode}>{selectedCountry.dialCode}</Text>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleTextChange}
          placeholder={placeholder || t('PHONE_INPUT.PLACEHOLDER')}
          placeholderTextColor={theme.colors.text.placeholder}
          keyboardType="phone-pad"
          editable={!disabled}
          testID={testID}
        />
      </View>

      {hasError && <Text style={styles.errorText}>{error}</Text>}

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {t('PHONE_INPUT.SELECT_COUNTRY')}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={COUNTRIES}
              keyExtractor={item => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => handleCountrySelect(item)}
                >
                  <Text style={styles.countryFlag}>{item.flag}</Text>
                  <Text style={styles.countryName}>{item.name}</Text>
                  <Text style={styles.countryDialCode}>{item.dialCode}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
