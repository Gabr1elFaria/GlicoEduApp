import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: 'auto',
    backgroundColor: '#FFFFFF',
  },
  container: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  questionText: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 40,
    textAlign: 'center',
  },
  optionButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 20,
  },
  optionLetter: {},
  optionLetterBox: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 50,
    paddingTop: 2,
    alignItems: 'center',
    marginRight: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});
