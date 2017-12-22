import React, {Component} from 'react';
import {
    ScrollView,
    Image, Text, View, TextInput,
    Dimensions
} from 'react-native'


export default class SwiperScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                scrollEventThrottle={10}
                showHorizontalScrollIndicator={false}
            >
                <View style={{
                    backgroundColor: '#43f707',
                    width: screenWidth,
                    height: screenHeight,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                </View>
                <View style={{
                    backgroundColor: '#f72702',
                    width: screenWidth,
                    height: screenHeight,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                </View>
                <View style={{
                    backgroundColor: '#0864db',
                    flex: 1, // height (as default) to be full screen
                    width: screenWidth,
                    height: screenHeight,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                </View>
            </ScrollView>
        );
    }
}
