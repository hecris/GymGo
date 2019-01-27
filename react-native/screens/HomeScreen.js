import React from 'react';
import {
    Alert,
    TextInput,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Image,
} from 'react-native';

import HomeScreenStyles from './styles/HomeScreenStyles.js';
import Header from './Header.js';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle:
            <View style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
            }}>
                <Header title='GymGo' />
            </View>
        ,
    };

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
        return fetch('https://smart-dolphin-9.localtunnel.me/gymsearch?name=' + name)
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
        var res_count = Object.keys(this.state.results).length.toString();

        for (let i = 0; i < res_count; i++) {
            gym = this.state.results[i];
            gyms.push(
                <TouchableHighlight
                    key={'gymRes' + i.toString()}
                    underlayColor='white'
                    onPress={() => this.props.navigation.navigate('Gym', {
                        name: this.state.results[i].name,
                        location: this.state.results[i].location,
                        photo: this.state.results[i].photo,
                        geo: this.state.results[i].geo,
                    })}
                    style={HomeScreenStyles.GymCard}>
                    <View>
                        <Image
                            style={{ width: 'auto', height: 200 }}
                            source={{ uri: gym.photo }}
                        />
                        <Text style={HomeScreenStyles.GymName}>
                            {gym.name}
                        </Text>
                        <Text style={HomeScreenStyles.GymAddress}>
                            {gym.location}
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        }

        return gyms;
    }

    componentWillMount() {
        this.__gymsearch();
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <TextInput
                        onChangeText={(text) => this.setState({ text })}
                        style={HomeScreenStyles.searchTx}
                        onSubmitEditing={this.__gymsearch.bind(this)}
                        placeholder='Gyms Near Me'
                    />

                    <Text style={HomeScreenStyles.loadingLbl}>
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
