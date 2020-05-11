import React, { Component } from 'react';
import '../App.min.css';
import Header from './Header';

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange = e => {
        this.setState({ value:e.target.value });
        console.log({ value: e.target.value })
    };
    
    handleClick = e => {
        console.log('Form has been submitted');
    };

    handleSubmit = e => {
        alert('An email and password were submitted. Email: '+this.state.value);
        e.preventDefault();
        
    };
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row holi">
                    <section className="col-md-7"></section>
                    <aside className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row justify-content-center">
                                <p>Sign in & <b>Buy Tickets</b></p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="form-label">Email</label>
                                <input type="email" value={this.state.value} onChange={this.handleChange}className="form-control hola" id="inputEmail3" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword3" className="form-label">Password</label>
                                <input type="password" className="form-control hola" id="inputPassword3" placeholder="Password" />
                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="col-sm-6">
                                    <button onClick={this.handleClick} type="submit" className="btn btn-dark btn-block">Sign in</button>
                                </div>
                                <div className="col-sm-6">
                                    <button type="button" className="btn btn-dark btn-block">Sign up</button>
                                </div>
                            </div>
                        </form>
                    </aside>
                </div>
            </div>
        );
    }

}

export default Landing;