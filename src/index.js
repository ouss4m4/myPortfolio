import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>
)
ReactDOM.render(<App />, document.getElementById('root'));

