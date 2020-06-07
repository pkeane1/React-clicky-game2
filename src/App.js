import React, { Component } from "react";
import './App.css';
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import cards from "./cards.json"
import Jumbotron from "./components/Jumbotron"

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
}

gameOver = () => {
  if(this.state.score > this.state.highscore) {
    this.setState({highscore:this.state.score},function() {
    })
  }

  this.state.cards.forEach(card => {
    card.count = 0;
  });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
}

clickCount = (id) => {
  this.state.cards.find((o, i) => {
    if (o.id === id) {
      if(cards[i].count === 0){
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.gameOver();
      }
    }
  });
}


  render () {
    return (
    <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game!</Header>
      
      <Jumbotron/>
      <div className = "cardContainer">
      {this.state.cards.map(card => (
        
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
      ))}
      </div>
    </Wrapper>
    );
  }
}

export default App;