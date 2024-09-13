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
  boxCalculator: {
    height: 50,
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#CC5FEB',
    borderColor: '#CC5FEB',
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderRadius: 5,
  },
  boxRecipe: {
    height: 50,
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#00A0FF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#00A0FF',
    paddingLeft: 5,
    paddingRight: 5,
  },
  boxQuiz: {
    height: 50,
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00CFBE',
    borderColor: '#00CFBE',
    gap: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export const featureText = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
  textCalculator: {
    display: 'flex',
    alignItems: 'flex-start',
    width: 90,
    fontSize: 20,
    fontWeight: '500',
  },
});

export const featureIcon = StyleSheet.create({
  Calc: {
    fontSize: 35,
  },
  Receipes: {
    fontSize: 35,
  },
  Quiz: {
    fontSize: 35,
  },
});
