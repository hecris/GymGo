import React from 'react';
import {
    Alert,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import GymScreenStyles from './styles/GymScreenStyles.js';

export default class GymScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            track: 'Check In!',
            distance: '',
        };
    }

    __findDistanceBtwn() {
        const gymGeo = this.props.navigation.getParam('geo', '');
        return fetch('https://fresh-rabbit-0.localtunnel.me/distancetogym?gymlatlng=' + gymGeo)
            .then((response) => response.json())
            .then((responseJson) => {
                this.state.distance = JSON.stringify(responseJson);
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
                // backgroundColor: 'lightgreen',
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
                <TouchableHighlight
                    style={[GymScreenStyles.TrackBtn, {
                        borderColor: 'black',
                    }]}
                    underlayColor='white'
                    onPress={() => this.__findDistanceBtwn()}>
                    <Text style={GymScreenStyles.TrackBtnLbl}>
                        {this.state.track}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}