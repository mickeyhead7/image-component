import Imgix from 'react-imgix';
import React, { Component } from 'react';

export default class Picture extends Component {
    render () {
        const props = this.props;

        return (
            <Imgix
                { ...props }
                type="picture"
            >
                {this.props.children}
            </Imgix>
        );
    }
}
