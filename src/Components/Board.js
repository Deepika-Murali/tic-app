import React from 'react';
import Square from './Square';


class Board extends React.Component {

  constructor(props){

    super(props);
      this.state = {     
        squareCount: 0,
        squares:Array(9).fill(null)
      };

    this.renderSquarecall = this.renderSquarecall.bind(this)
    this.renderSquare = this.renderSquare.bind(this)
    this.squareCall = this.squareCall.bind(this)
  }
  
  renderSquare(i,j,k) {
    
    let buttonnum = i
    return <Square value={i} clickcnt = {j} disableButton={k} squareCall={this.squareCall} />
    
  }

  renderSquarecall(){
    
    var cnt 

    for (cnt=1;cnt < 4;cnt=cnt+1){

      this.renderSquare(cnt,0,false)

    }

  }

  squareCall(){

    let temp= this.state.squareCount

    this.setState(
      {
        squareCount : temp + 1
      })
    
    return temp;
  }

  render() {
  
    let status;
    
    let temp= this.state.squareCount

    if ((temp%2) === 0){
         status = 'Next player: X'
         
       }

    else{
      status = 'Next player: O'
      
    }

    return (

      <div>

        <div className="status">
      
          {status}
      
        </div>
        
        
      
           
      <div className="board-row">
        {this.renderSquare(1,0,false)}
        {this.renderSquare(2,0,false)}
        {this.renderSquare(3,0,false)}
      </div>

      <div className="board-row">
        {this.renderSquare(4,0,false)}
        {this.renderSquare(5,0,false)}
        {this.renderSquare(6,0,false)}
      </div>

      <div className="board-row">
        {this.renderSquare(7,0,false)}
        {this.renderSquare(8,0,false)}
        {this.renderSquare(9,0,false)}
      </div>


    
        
        
      
      </div>
    );
  
  }

}
export default Board;
