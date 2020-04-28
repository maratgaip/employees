import React, {Component} from 'react';
import List from './components/List';

class App extends Component {
    constructor(){
        console.log('constructor')
        super();
        this.state = {
            employees : []
        }
    }

    getApiData = () => {
        fetch('https://raw.githubusercontent.com/maratgaip/json/master/people.json')
        .then(json=>json.json())
        .then(employees=>this.setState({employees}))
    }

    componentDidMount(){
        this.getApiData();
    }

    render(){
        console.log('render')
        const { employees } = this.state;
        return (
            <div>
                <h2>Main Page</h2>
                <List employees={employees} />
            </div>
        )
    }
    
}

export default App;