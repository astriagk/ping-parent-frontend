import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { t } from '@locales';
import type { TermsModalProps } from './types';
import { makeStyles } from './styles';

export default function TermsModal({ visible, onClose }: TermsModalProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('TERMS.TITLE')}</Text>
          <TouchableOpacity onPress={onClose} testID="terms-close-button">
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.sectionTitle}>
            {t('TERMS.SECTIONS.ACCEPTANCE')}
          </Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.ACCEPTANCE_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>{t('TERMS.SECTIONS.LICENSE')}</Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.LICENSE_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>{t('TERMS.SECTIONS.ACCOUNT')}</Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.ACCOUNT_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>{t('TERMS.SECTIONS.PRIVACY')}</Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.PRIVACY_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>{t('TERMS.SECTIONS.CONTENT')}</Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.CONTENT_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>
            {t('TERMS.SECTIONS.PROHIBITED')}
          </Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.PROHIBITED_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>
            {t('TERMS.SECTIONS.LIABILITY')}
          </Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.LIABILITY_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>
            {t('TERMS.SECTIONS.MODIFICATIONS')}
          </Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.MODIFICATIONS_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>
            {t('TERMS.SECTIONS.GOVERNING_LAW')}
          </Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.GOVERNING_LAW_TEXT')}
          </Text>

          <Text style={styles.sectionTitle}>{t('TERMS.SECTIONS.CONTACT')}</Text>
          <Text style={styles.paragraph}>
            {t('TERMS.SECTIONS.CONTACT_TEXT')}
          </Text>

          <Text style={styles.lastUpdated}>{t('TERMS.LAST_UPDATED')}</Text>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={onClose}
            testID="terms-accept-button"
          >
            <Text style={styles.acceptButtonText}>
              {t('TERMS.ACCEPT_BUTTON')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
