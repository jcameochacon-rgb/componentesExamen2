import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';

import { BotonStarted } from '@/components/botonstarted';
import { CryptoOrb } from '@/components/crypto-orb';
import { Navbar } from '@/components/navbar';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Navbar />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <Text style={styles.logo} accessibilityRole="header">
            Crypt<Text style={styles.logoAccent}>X</Text>
          </Text>

          <View style={styles.artwork}>
            <CryptoOrb />
          </View>

          <View style={styles.description}>
            <Text style={styles.title}>Jump start your{"\n"}crypto portfolio</Text>
            <Text style={styles.subtitle}>
              Take your investment portfolio{"\n"}to next level
            </Text>
          </View>

          <BotonStarted style={styles.button} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050505',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 480,
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 20,
    paddingBottom: 22,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: -2,
    lineHeight: 58,
  },
  logoAccent: {
    color: '#6552FE',
  },
  artwork: {
    flex: 1,
    minHeight: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginBottom: 48,
    gap: 28,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: -0.8,
    lineHeight: 43,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 23,
  },
  button: {
    minHeight: 57,
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: '#A51BFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.32,
    shadowRadius: 18,
    elevation: 8,
  },
});
