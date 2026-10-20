import { StyleSheet, View } from 'react-native';

export function CryptoOrb() {
  return (
    <View style={styles.canvas} accessibilityLabel="Ilustración abstracta morada">
      <View style={styles.orb}>
        <View style={styles.core} />
        <View style={[styles.shell, styles.shellBack]} />
        <View style={[styles.shell, styles.shellLeft]} />
        <View style={[styles.shell, styles.shellRight]} />
        <View style={[styles.shell, styles.shellFront]} />
        <View style={styles.highlight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    maxWidth: 370,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orb: {
    width: '94%',
    height: '94%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  core: {
    position: 'absolute',
    width: '72%',
    height: '72%',
    borderRadius: 999,
    experimental_backgroundImage: 'linear-gradient(145deg, #CCD1FF 0%, #8775F6 38%, #4830C6 100%)',
    shadowColor: '#7457FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 28,
    elevation: 12,
  },
  shell: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 12,
    backgroundColor: 'transparent',
    shadowColor: '#9888FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.65,
    shadowRadius: 8,
    elevation: 5,
  },
  shellBack: {
    width: '82%',
    height: '58%',
    top: '14%',
    borderColor: '#AEB4FF',
    transform: [{ rotate: '-32deg' }],
  },
  shellLeft: {
    width: '84%',
    height: '45%',
    left: '-2%',
    top: '31%',
    borderColor: '#7860E8',
    borderWidth: 16,
    transform: [{ rotate: '28deg' }],
  },
  shellRight: {
    width: '78%',
    height: '52%',
    right: '-1%',
    top: '26%',
    borderColor: '#A9B1FF',
    borderWidth: 11,
    transform: [{ rotate: '48deg' }],
  },
  shellFront: {
    width: '68%',
    height: '38%',
    bottom: '12%',
    borderColor: '#6448D7',
    borderWidth: 13,
    transform: [{ rotate: '-18deg' }],
  },
  highlight: {
    position: 'absolute',
    width: '32%',
    height: '14%',
    top: '43%',
    left: '32%',
    borderRadius: 999,
    borderWidth: 5,
    borderColor: '#B4BCFF',
    opacity: 0.8,
    transform: [{ rotate: '46deg' }],
  },
});
