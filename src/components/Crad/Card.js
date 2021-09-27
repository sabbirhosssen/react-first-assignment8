import { useEffect, useState } from 'react';
import React from 'react';
import Friendlist from '../Friendlist/Friendlist';
import Cardsalary from '../Cardsalary/Cardsalary';

import('./Crad.css')


const Card = (props) => {
    const [friends, setFriendCrad] = useState([]);
    const [cardsalary, setcart] = useState([]);

    useEffect(() => {
        fetch('./friendShip.JSON')
            .then(res => res.json())
            .then(data => setFriendCrad(data))
    }, [])

    const handeleAddToCart = (friend) => {
        const newCart = [...cardsalary, friend];

        setcart(newCart);

    }
    return (

        <div className="cardall">
            <div className="cardside">

                <div className="card">
                    {
                        friends.map(friend => <Friendlist
                            key={friend.key}
                            friend={friend}
                            image={friend.img} name={friend.name} age={friend.age} country={friend.country} salary={friend.salary} handeleAddToCart={handeleAddToCart}
                        ></Friendlist>)

                    }
                </div>
                <div className="friendSalary">

                    <Cardsalary
                        key={cardsalary.key}
                        cardsalary={cardsalary}
                    ></Cardsalary>

                </div>
            </div>
        </div>

    );
};


export default Card;