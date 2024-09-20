import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 30,
    marginTop: 20,
    marginRight: 10,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  otherTitle: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
  },
  cookingTimeText: {
    fontSize: 24,
    fontWeight: '400',
  },
  listItem: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  listItemNumber: {
    fontSize: 22,
    fontWeight: '400',
  },
  item: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 1,
    textAlign: 'justify',
  },
  scrollView: {
    marginBottom: 80,
  },
  ingredientsBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});
