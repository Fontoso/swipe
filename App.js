import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from "./src/Deck.js";
import { Button, Card } from "react-native-elements";
import Ball from './src/Ball.js';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        title={item.text}
        image={{uri: item.uri}}
        key={item.id}
      >
        <Text style={{ marginBottom: 10}}>
          Zichichi merda
        </Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor="#03A9F4"
          title="View Now!"
        >

        </Button>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card
        title={"no more cards"}
        key={"no-cards"}
      >
      <Text style={{ marginBottom: 10}}>
        no more cards
      </Text>
      <Button
        icon={{name: 'code'}}
        backgroundColor="#03A9F4"
        title="View Now!"
      >
      </Button>
    </Card>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;


