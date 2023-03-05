import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '20@s',
    paddingTop: '30@vs',
  },
  textWrapper: {
    alignItems: 'center',
  },
  text: {
    fontSize: '20@s',
  },
  inputWrapper: {
    marginTop: '30@vs',
  },
  icon: {
    fontSize: 24,
    padding: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '20@vs',
  },
});

export default styles;
