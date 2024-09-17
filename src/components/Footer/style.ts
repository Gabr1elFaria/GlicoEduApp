import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export const featureBox = StyleSheet.create({
  box: {
    height: 50,
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderRadius: 5,
  },
  boxCalculator: {
    justifyContent: 'space-around',
    backgroundColor: '#CC5FEB',
    borderColor: '#CC5FEB',
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
  },
  boxRecipe: {
    justifyContent: 'center',
    backgroundColor: '#00A0FF',
    borderColor: '#00A0FF',
    paddingLeft: 5,
    paddingRight: 5,
    gap: 10,
  },
  boxQuiz: {
    justifyContent: 'center',
    backgroundColor: '#00CFBE',
    borderColor: '#00CFBE',
    gap: 10,
  },
});

export const featureText = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
  textCalculator: {
    display: 'flex',
    textAlign: 'center',
    width: 90,
  },
});

export const featureIcon = StyleSheet.create({
  Icon: {
    fontSize: 35,
  },
});
