import React, { Component } from 'react';

const LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&prompt=consent&response_type=code&client_id=687936443970-lftvnktn3vcd47qp7s9jfcc3rjmjfebu.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar`

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <a href={LOGIN_URL}>Login</a>
      </div>
    );
  }
}
