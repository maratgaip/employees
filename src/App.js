import React, {Component} from 'react';
import List from './components/List';
import './app.css'

class App extends Component {
    constructor(){
        console.log('constructor')
        super();
        this.state = {
            employees : [],
            isLoading: false
        }
    }

    getApiData = () => {
        this.setState({isLoading:true})
        fetch('https://raw.githubusercontent.com/maratgaip/json/master/people.json')
        .then(json=>json.json())
        .then(employees=>this.setState({employees, isLoading:false}))
    }

    componentDidMount(){
        this.getApiData();
    }

    render(){
        const { employees, isLoading } = this.state;
        const loader = <div className="lds-dual-ring"></div>;
        let content = isLoading ? loader : <List employees={employees} />
        if(!isLoading && !employees.length){
            content = <div className="not-found">Data Not Found</div>
        }
        return (
            <div className="container">
                <h2>Main Page</h2>
                {content}
            </div>
        )
    }
    
}

export default App;