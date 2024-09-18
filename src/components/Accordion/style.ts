import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: 130,
    borderRadius: 20,
    borderColor: '#EDEDED',
    backgroundColor: '#EDEDED',
    height: 40,
    padding: 1,
    marginLeft: 10,
  },
  accordion: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    gap: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  mainIcon: {
    display: 'flex',
    width: 30,
    paddingTop: -10,
  },
  text: {
    marginTop: -20,
    fontSize: 22,
    fontWeight: '500',
  },
  content: {
    display: 'flex',
    height: 150,
  },
  boxOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    marginLeft: 30,
    borderWidth: 2,
  },
  CheckBox: {
    width: 80,
    marginTop: 10,
  },
  icon: {
    display: 'flex',
    width: 40,
    height: 40,
    marginTop: 10,
  },
  animatedView: {
    display: 'flex',
    marginLeft: 12,
  },
});
