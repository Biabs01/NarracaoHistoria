import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import StoryCard from './StoryCard';
import AppLoading from 'expo-app-loading';
import { FlatList } from 'react-native-gesture-handler';

let customFonts = {"Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")};

let stories = require("./temp_stories.json");

export default class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({ fontLoaded: true });
    }

    componentDidMount(){
        this._loadFontsAsync();
    }

    renderItem = ({item: story}) => {
        return <StoryCard story={story}/>;
    };

    keyExtractor = (item, index) => index.toString();

    render(){
        if (!this.state.fontLoaded){
            return <AppLoading/>
        } else {
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.iconImage}
                            ></Image>
                        </View>

                    </View>
                </View>
            );
        } 
    }
}