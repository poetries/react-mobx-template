import React from 'react'
import { Link } from 'react-router-dom'
import { inject } from 'mobx-react';

@inject('aboutStore')
export default class About extends React.Component {
    render() {
        const {aboutStore:{title}} = this.props
        return (
            <div>
                <p>{title}</p>
                <Link to="/">go to Home</Link>
            </div>
        )
    }
}
