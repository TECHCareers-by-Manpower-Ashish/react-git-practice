import React from 'react';
import ReactDOM from 'react-dom';


class MYCALCULATOR extends React.Component{

render() {
  return (
    <form>
    <h1>Welcome to my Calculator {this.state.Input1} {this.state.Input2}</h1>
    <p>Enter your Input1:</p>
    <input
      type='text'
      name='Input1'
      required
     />
  <p>Operation:</p>   
< 

        <select value={this.state.mycar}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
        </select>


  />


    <p>Enter your Input2:</p>
    <input
      type='text'
      name='Input2'
      required
    />
    {this.state.errormessage}
    </form>
  );
  }
}

















ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

