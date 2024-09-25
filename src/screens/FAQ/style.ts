import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    width: 'auto',
  },
  accordionContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 'auto',
  },
  accordion: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionText: {
    fontSize: 24,
    fontWeight: '500',
    flex: 1,
    marginRight: 10,
    textAlign: 'center',
  },
  answerContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  answerText: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'justify',
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
});
