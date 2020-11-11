import React, { Component } from 'react';
import './styles.css';

class Layout extends Component {
    render() {
        const { children } = this.props;

        return(
            <div>
                <div className="body-container">
                    {children}
                </div> 
            </div>
        )
    }
}


export default Layout;