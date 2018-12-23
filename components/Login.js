import React, { Component } from 'react';
import fire from '../config/fbConfig';
class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    login = (e) =>{
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((e)=>{
            console.log("promise fulfilled", e)
        }).catch((err)=>{
            console.log(err)
        });
    }

    signup =(e)=>{
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((e)=>{

        }).catch((e)=>{

        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="pink lighten-4">
                    <div className="input-field">
                        <label htmlFor="Email" className="black-text" >Email</label>
                        <input type="text" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password" className="black-text" >password</label>
                        <textarea id="password" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <button className="btn pink lighten-1 z=depth-0 " onClick={this.login}>Log in</button>
                    </div>
                    <button className="btn pink lighten-1 z=depth-0" onClick={this.signup}>Sign up</button>
                </form>
                <h1>Dont worry about me</h1>
            </div>
        )
    }
}
export default Login