import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'

class App extends Component {
    state = {
        text: ""
    };

    async componentDidMount() {
        const response = await fetch('/tests');
        const body = await response.text();
        console.log(body)
        this.setState({text: body});
    }

    render() {
        const {text} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-intro">
                        <h2>Test text</h2>
                        {text}
                    </div>
                </header>
            </div>
        );
    }
}
export default App;
