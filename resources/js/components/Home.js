import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        googleLoginUrl: null,
    }
  }
    componentDidMount() {
        fetch('/api/auth/google/url', { headers: new Headers({ accept: 'application/json' }) })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong!');
            })
            .then((data) => this.setState({ googleLoginUrl: data.url }))
            .catch((error) => console.error(error));
    }

    render() {
        const { googleLoginUrl } = this.state;
        return (
            <div>
                {googleLoginUrl && (
                    <a className="App-link" href={googleLoginUrl}>
                        Sign in with Google
                    </a>
                )}
            </div>
        );
    }
}
