import React, { Component } from 'react';
import axios from 'axios';

export default class CallbackPage extends Component {
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const code = params.get('code');
        axios.post(`localhost:8000/api/oauth`, {
            params: {
                code,
            }
        })
    }

    render() {
        return (
            <div>Callback</div>
        )
    }
}
