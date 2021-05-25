import React from 'react';
import {Link} from 'react-router-dom';


function ListItem(props) {
    return (
        <div className='list-card-item'>
            <div className='list-img-wrap'>
                <Link to={props.path}>
                    <img className='list-img' alt='' src={props.src}  />
                </Link>
            </div>
            <div className='list-info'>
                <h4 className='list-title'>{props.title}</h4>
                <div className='text-wrap'>
                    <p className='list-text'>{props.text}</p>
                </div>
                <Link to={props.path} className='text-muted'>Read more</Link>
            </div>
        </div>
    )
}

export default ListItem
