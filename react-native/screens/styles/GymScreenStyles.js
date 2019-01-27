import {
  StyleSheet,
} from 'react-native';

export default GymScreenStyles = StyleSheet.create({
  GymInfo: {
    backgroundColor: 'whitesmoke',
    paddingBottom: 10,
  },

  GymName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },

  GymAddress: {
    fontSize: 24,
    textAlign: 'center',
  },

  TrackBtn: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 100,
    padding: 27,
    backgroundColor: 'white',
  },

  TrackBtnLbl: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'green',
  },

  DistanceLbl: {
    textAlign: 'center',
    fontSize: 18,
  },

  Outer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 140,
    height: 280,
    width: 280,
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 40,
  }
});