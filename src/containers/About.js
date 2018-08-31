import React from 'react'
import { Link } from 'react-router-dom'
import { inject ,observer} from 'mobx-react';

@inject('aboutStore')
@observer
export default class About extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {aboutStore:{title,num,getUserInfo}} = this.props
        return (
            <div>
                <p>{title}</p>
                <p>{getUserInfo}</p>
                
                <button onClick={()=>this.props.aboutStore.add()}>+</button>
                <button onClick={()=>this.props.aboutStore.reduce()}>-</button>
                <div>{num}</div>
                <Link to="/">go to Home</Link>
            </div>
        )
    }
}
