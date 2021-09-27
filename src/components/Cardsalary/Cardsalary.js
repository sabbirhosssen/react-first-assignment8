import React from 'react';
import('./cardsalary.css')

const Cardsalary = (props) => {
    const { cardsalary } = props;
    let totalProduct = 0;
    let total = 0;
    for (const product of cardsalary) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.salary;
        totalProduct = totalProduct + product.quantity;
    }
    // const {image , name}=product;
    return (
        <div>
            <div className="cart-section">
                <div className="total-section">
                    <h3>Added Programing Club Members</h3>
                    <h5>Total Members Added: {totalProduct}</h5>
                    <p>Member Total Salary:  {total} </p>
                </div>
                {
                    cardsalary.map(product =>
                        <div >
                            <div className="friendname">
                                <img src={product.img} alt="" />
                                <h5>{product.name}</h5>
                            </div>

                        </div>
                    )
                }
                <div className="btn-bye">
                    <button > Hire  Now</button>
                </div>
            </div>

        </div>
    );
};

export default Cardsalary;
