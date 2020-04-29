import React, {Component} from 'react';
import List from './components/list/List';
import Search from './components/search/Search';
import './app.css'

class App extends Component {
    constructor(){
        console.log('constructor')
        super();
        this.state = {
            employees : [],
            isLoading: false,
            search:''
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

    getSearch = (search) => {
        this.setState({search})
        console.log(search)
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
                <Search getSearch={this.getSearch} />
                {content}
            </div>
        )
    }
    
}

export default App;