import React, { Component } from 'react';
import Main from '../main/main'
import './page404.scss';

class Page404 extends Component {

  render() {
    return (
        <Main>
            <div className="container page page-404">
                <p>Page not found!!!</p>
            </div>
        </Main>
    );
  }
}

export default Page404;