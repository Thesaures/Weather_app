import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Style = StyleSheet.create({
  container: {
    height: hp(18),
    width: wp(12),
    flexDirection: 'column',
    borderRadius: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: hp(0.1),
    margin: wp(1),
    // borderColor: 'white',
    // borderWidth: 0.5,
    borderLeftColor: 'white',
    borderLeftWidth: 0.8,
  },
  text: {
    color: 'white',
    fontWeight: '400',
    fontSize: hp(1.7),
  },
  temp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(9),
  },
});
export default Style;
