import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import GymScreenStyles from './styles/GymScreenStyles.js';

export default class GymScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        const gymName = navigation.getParam('name', '');
        const gymAddress = navigation.getParam('location', '');
        const gymPhoto = navigation.getParam('photo', '');
        return (
            <View>
                <Image 
                style={{ width: 'auto', height: 250 }}
                source={{uri: gymPhoto}}
                />
                <Text style={GymScreenStyles.GymName}>
                    {gymName}
                </Text>
                <Text style={GymScreenStyles.GymAddress}>
                    {gymAddress}
                </Text>
            </View>
        );
    }
}