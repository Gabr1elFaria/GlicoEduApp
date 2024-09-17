import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    width: 'auto',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginBottom: -60,
  },
  text: {
    fontSize: 22,
    width: 200,
    fontWeight: '400',
    textAlign: 'center',
  },
  textInsulin: {
    width: 280,
  },
  textResult: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: 180,
    fontSize: 22,
    height: 48,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    width: 120,
    height: 40,
    padding: -5,
  },
  buttonDisable: {
    borderRadius: 10,
  },
});
