import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 270,
    borderWidth: 6,
    borderColor: '#C300C3',
    borderRadius: 10,
    marginTop: 34,
    marginBottom: 20,
    backgroundColor: 'rgba(195, 0, 195, 0.15)',
    display: 'flex',
    gap: 20,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
  },
  icon: {
    fontSize: 45,
  },
});
