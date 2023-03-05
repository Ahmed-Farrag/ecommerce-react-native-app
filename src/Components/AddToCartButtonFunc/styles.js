const {StyleSheet} = require('react-native');

const incDecBtnColor = '#000';

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 200,
    minHeight: 50,
  },
  button: {
    flex: 1,
  },
  increaseDecreaseContainer: {
    flexDirection: 'row',
    backgroundColor: incDecBtnColor,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: incDecBtnColor,
  },
  text: {
    fontSize: 100,
  },
  plusMinus: {padding: 25},
});

export default styles;
