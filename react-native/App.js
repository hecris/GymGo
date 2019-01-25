import React from 'react';
import {
  Alert,
  TextInput,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      results: '',
      gymList: (<Text></Text>),
      loading: false,
    };
  }
  __gymsearch() {
    var name = this.state.text;
    this.setState({ 'loading': true });
    return fetch('https://foolish-catfish-93.localtunnel.me/gymsearch?name=' + name)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 'loading': false });
        this.setState({ 'results': responseJson });
      })
      .then((dummy) => {
        this.setState({ 'gymList': this.__showGyms() });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  __showGyms() {
    var gyms = [];
    var i = 0;
    for (dummy in this.state.results) {
      gym = this.state.results[i];
      gyms.push(
        <TouchableHighlight
          key={'gymRes' + i.toString()}
          underlayColor='white'
          onPress={() => Alert.alert('')}
          style={styles.GymCard}>
          <View>
            <Image
              style={{ width: 'auto', height: 200 }}
              source={{ uri: gym.photo }}
            />
            <Text style={styles.GymName}>
              {gym.name}
            </Text>
            <Text style={styles.GymAddress}>
              {gym.location}
            </Text>
          </View>
        </TouchableHighlight>
      );
      i++;
    }

    return gyms;
  }

  componentWillMount() {
    this.__gymsearch();
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>
          GymGo
      </Text>
        <ScrollView>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
            style={styles.searchTx}
            onSubmitEditing={this.__gymsearch.bind(this)}
            placeholder='Gyms Near Me'
          />

          <Text style={styles.loadingLbl}>
            {this.state.loading ? 'Searching for gyms...' : ''}
          </Text>

          <View>
            {this.state.gymList}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 36,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  searchTx: {
    fontSize: 18,
    margin: 40,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },

  searchBtn: {
    margin: 40,
    marginTop: 0,
  },

  loadingLbl: {
    textAlign: 'center',
    fontSize: 24,
    color: 'grey',
    marginBottom: 10,
  },

  GymCard: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'whitesmoke',
  },

  GymName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },

  GymAddress: {
    fontSize: 18,
  },

});
