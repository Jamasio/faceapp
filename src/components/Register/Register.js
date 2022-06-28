import React from "react";

class Register extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        title: '',
        email: '',
        password: ''
    }
   }

   onTitleChange = (Event) => {
        this.setState({title: Event.target.value})
   }

   onEmailChange = (Event) => {
    this.setState({email: Event.target.value})
    }

    onPasswordChange = (Event) => {
        this.setState({password: Event.target.value})
   }

    onSubmitRegister = () => {
        const { title, email, password } = this.state;
        fetch('http://localhost:2999/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

   render() {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="text" 
                            name="name"  
                            id="name" 
                            onChange={this.onTitleChange}
                            />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email"  
                            id="email"
                            onChange={this.onEmailChange} 
                            />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            onChange={this.onPasswordChange}
                            />
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register" 
                        onClick={this.onSubmitRegister} />
                    </div>
                </div>
            </main>
        </article>
    )
   }
}

export default Register;