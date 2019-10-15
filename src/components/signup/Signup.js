import React, { Component } from 'react';
import SignupModal from './SignupModal';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class Signup extends Component {
    render() {
        const { modal } = this.props.location.state;

        return (
            <div className={modal ? 'modal' : undefined}>
                {modal && <Link to='/partner'>Close</Link>}
                <div>
                    <img src='https://source.unsplash.com/random' />
                </div>
            </div>
        );
    }
}

export default Signup;
