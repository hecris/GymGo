import React from 'react';
import {
    Alert,
    Animated,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import GymScreenStyles from './styles/GymScreenStyles.js';
import * as API_URL from './API_URL.js';

export default class GymScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            track: 'Check In!',
            distance: '...',
            trackColor: 'lightgray',
        };

        this.interval = setInterval(() => {
            // this.__findDistanceBtwn();
        }, 5000);
    }

    componentWillMount() {
        this.__findDistanceBtwn();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    __findDistanceBtwn() {
        // Alert.alert('hello');
        const gymGeo = this.props.navigation.getParam('geo', '');
        return fetch(API_URL.API_URL + '/distancetogym?gymlatlng=' + gymGeo)
            .then((response) => response.json())
            .then((responseJson) => {
                return JSON.stringify(responseJson);
            })
            .then((responseDistance) => {
                this.setState({
                    'distance': responseDistance,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigation } = this.props;
        const gymName = navigation.getParam('name', '');
        const gymAddress = navigation.getParam('location', '');
        const gymPhoto = navigation.getParam('photo', '');
        return (
            <View style={{
                // backgroundColor: '#FFF8DC',
            }}>
                <View style={GymScreenStyles.GymInfo}>
                    <Image
                        style={{ width: 'auto', height: 250 }}
                        source={{ uri: gymPhoto }}
                    />
                    <Text style={GymScreenStyles.GymName}>
                        {gymName}
                    </Text>
                    <Text style={GymScreenStyles.GymAddress}>
                        {gymAddress}
                    </Text>

                </View>
                <View style={[GymScreenStyles.Outer,
                {
                    backgroundColor: this.state.trackColor,
                }]}>
                    <TouchableHighlight
                        style={GymScreenStyles.TrackBtn}
                        underlayColor='white'
                        onPress={() => {
                            this.setState({'trackColor': 'green'})
                        }}>
                        <View>
                            <Text style={GymScreenStyles.DistanceLbl}>
                                You are {' '}
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'green',
                                    fontSize: 20,
                                }}>
                                    {this.state.distance}
                                </Text>
                                {' '} meters away
                </Text>
                            <Text style={GymScreenStyles.TrackBtnLbl}>
                                {this.state.track}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
