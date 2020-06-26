import React from 'react';

class Square extends React.Component {

  constructor(props){

    super(props);
      this.state = {     
        count   : this.props.clickcnt,
        first      :this.props.value,
        button: this.props.disableButton
      };
      this.valUpdt = this.valUpdt.bind(this)
  }

   valUpdt(event){
    let temp, value
    
     
     temp = this.props.squareCall()
     if ((temp%2) === 0){
         value = "X"}
         else{
          value = "O"
         }

    this.setState 
    ({
         
         first: value,
         count: this.state.count+1,
         button:"true"

    });

      }
  render() {
    let first =this.state.first
    return (
      <button className="square" onClick={this.valUpdt} disabled={this.state.button}>
        {first}      
      </button>
      
    );
  
  }

}

export default Square




