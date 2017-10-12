import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input.js'
import './app.css'

class App extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            hash: "",
            colors: []
        } 
        
        this.md5 = require('js-md5');
    }

    
    onChange(field, value) {
        // parent class change handler is always called with field name and value
        this.setState({[field]: value});
        
        let str = this.state.hash = value ? this.md5.create().update(value).hex() : ""; 
        let colors = [];
        
        while (str.length) {
            colors.push(str.substr(0, 6));
            str = str.substr(6);
        } 
        
        this.setState({colors: colors});
    }

    
	render() {
        
        let gfs = [];
        for ( var i = 0; i < this.state.colors.length - 2; i++ ) {
            let p = Math.round(((i+1) / (this.state.colors.length - 1))*100),
                c1 = "#" + this.state.colors[i],
                c2 = "#" + this.state.colors[i+1];
            
            
            gfs.push(c1 + ' ' + p+ "% , " + c2 + ' ' + p+ "%"); 
        }
        
        let angle = this.state.colors.length ? parseInt(this.state.colors[this.state.colors.length-1], 16) : 0;
        
        gfs = !gfs.length ? ['#ffffff 0%', '#ffffff 100%'] : gfs;
        
        let gfstring = gfs.join(', ');
        
        let Bg = {
            'background': 'linear-gradient('+angle+'deg, ' +  gfstring + ')'
        }
        
        console.log(this.state.colors);
         
		return (
			<div className="container" style={Bg}>
            <span><label className='shadow' for="name">Insert your name</label></span>
            
            <Input onChange={this.onChange.bind(this)} />
            
            <div className="result">
                <span className="shadow">{this.state.hash}</span>
            </div>
			</div>
		)
	}
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
