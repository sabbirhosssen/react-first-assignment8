import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import('./Friendlist.css')

const Friendlist = (props) => {

    const element = <FontAwesomeIcon icon={faUserPlus} />

    const { name, image, age, country, salary } = props;
    return (
        <div className="friendlist">
            <img src={image} alt="" />
            <div className="text-left">
                <h2 >Name : {name} </h2>
                <h2>Age : {age}</h2>
                <h3>Country : {country}</h3>
                <h2>Salary : $ <span>{salary}</span> </h2>

            </div>
            <div>
                <button
                    onClick={() => { props.handeleAddToCart(props.friend) }}
                    className="btn-regular"
                >
                    {element}  Add To Member</button>
            </div>


        </div>
    );
};
export default Friendlist;