import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import ShopScreenStyles from './styles/ShopScreenStyles.js';
import Header from './Header.js';

export default class ShopScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle:
            <View style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
            }}>
                <Header title='Shop' />
            </View>
        ,
    };

    constructor(props) {
        super(props);
        this.state = {
            balance: 0,
        }
    }

    __makeShop() {
        var items = [];
        var itemsInfo = [
            {
                itemName: 'Protein Bar',
                price: '30',
                uri: 'https://hbnutrition.com.au/wp-content/uploads/2017/08/protein-bars-2017.jpg',
            },

            {
                itemName: 'Blender Bottle',
                price: '100',
                uri: 'https://images-na.ssl-images-amazon.com/images/I/61jC%2Bv6qnUL._SY679_.jpg',
            },

            {
                itemName: 'Whey Gold Standard Protein',
                price: '400',
                uri: 'https://images-na.ssl-images-amazon.com/images/I/81ENB0%2BARdL._SX355_.jpg',
            },

            {
                itemName: 'A Cat',
                price: '99999',
                uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            },

        ];
        for (var i = 0; i < itemsInfo.length; i++) {
            items.push(
                <ShopItem key={i.toString()}
                    itemName={itemsInfo[i]['itemName']}
                    price={itemsInfo[i]['price']}
                    uri={itemsInfo[i]['uri']}

                />
            )
        }
        return items;
    }

    render() {
        return (
            <View>
                <Text style={ShopScreenStyles.balanceLbl}>
                    Your balance: {this.state.balance.toString()}
                </Text>
                <ScrollView>
                    {this.__makeShop()}
                </ScrollView>
            </View>
        );
    }
}

class ShopItem extends React.Component {

    render() {
        return (
            <View style={ShopScreenStyles.shopItem}>
                <Image
                    source={{ uri: this.props.uri }}
                    style={{ height: 150, width: 'auto' }}
                />
                <Text style={ShopScreenStyles.itemName}>
                    {this.props.itemName}
                </Text>
                <Text style={ShopScreenStyles.itemPrice}>
                    {this.props.price} points
            </Text>
            </View>
        );
    }
}
