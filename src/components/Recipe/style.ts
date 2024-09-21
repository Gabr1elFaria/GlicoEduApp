import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  flatListBox: {
    height: 540,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    marginHorizontal: 15,
    backgroundColor: '#d9f8ff',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginTop: 10,
  },
  containerText: {
    marginLeft: 15,
    justifyContent: 'center',
    width: 270,
    overflow: 'hidden',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
  icon: {
    marginRight: 10,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
});
