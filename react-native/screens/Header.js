import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <Text style={styles.header}>
                {this.props.title}
            </Text>
        );
    }
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: 'green',
        color: 'white',
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

