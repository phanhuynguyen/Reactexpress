import React, {Component} from 'react';
import './customers.css';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
      }
  };

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, () => console.log('Customers fetch..',
            customers)));
  } 
    render () {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customers =>
                        <li key={customers.id}>{ customers.firstName }  { customers.lastName }</li>)}
                </ul>
            </div>
                
    );
  }
} 

export default Customers;
