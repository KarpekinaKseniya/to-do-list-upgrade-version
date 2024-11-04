import './App.css';
import ListOfTasks from './components/ListOfTasks.js';
import Header from './common/Header.js';
import React, {Component} from 'react';

class App extends Component {
    state = {
        text: ""
    };

    async componentDidMount() {
        const response = await fetch('/tests');
        const body = await response.text();
        this.setState({text: body});
    }

    render() {
        const {text} = this.state;
        return (
            <div className="App">
                <Header/>
                <ListOfTasks />
                <div className="App-intro">
                    <h2>Test text</h2>
                    {text}
                </div>
            </div>
        );
    }
}
export default App;
