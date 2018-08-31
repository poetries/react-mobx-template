import React from 'react';
import { Link } from 'react-router-dom';
import { inject,observer } from 'mobx-react';

//当数据返回更新的时候 需要调用observer来更新UI

@inject('homeStore')
@observer
export default class Home extends React.Component {
    componentDidMount() {
        this.props.homeStore.getHomeList()
    }
    render() {
        const {homeStore:{title,state:{data,fetching,error}}} = this.props
        return (
            <div>
              
                <p>{title}</p>
                <Link to="/about">go to About</Link>
                {fetching && <div>loading....</div>}
                {data&&data.map(v=><div key={v.author+Math.random()}>{v.author}-{v.poetry_title}-{v.poetry_body}</div>) }
            </div>
        );
    }
}