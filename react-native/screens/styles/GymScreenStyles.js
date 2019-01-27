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
    width: 250,
    height: 250,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 10,
    borderRadius: 125,
    padding: 50,
  },

  TrackBtnLbl: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
  },

  DistanceLbl: {
    textAlign: 'center',
    fontSize: 18,
  },
});