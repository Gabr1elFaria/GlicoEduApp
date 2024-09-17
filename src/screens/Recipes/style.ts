import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerOne: {
    width: 'auto',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 2,
    marginTop: -10,
  },
  textInput: {
    borderWidth: 1,
    width: 270,
    fontSize: 22,
    height: 48,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  InputContainer: {},
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 15,
    width: 120,
    height: 40,
    padding: -5,
  },
  buttonDisable: {
    borderRadius: 15,
    width: 120,
    height: 40,
    padding: -5,
  },
  iconStyle: {
    marginLeft: 5,
    marginRight: -2,
  },
});
