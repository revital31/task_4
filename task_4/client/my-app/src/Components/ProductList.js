import React from 'react'

 function ProductList(props) {
    const {id,name,price,manufacturer,units,time} =props;
    return (
        <div>

                <ul>
                    <li>
                        Id: {id}
                    </li>


                    <li>
                        Name: {name}
                    </li>

                    <li>
                        Price: {price}
                    </li>

                    <li>
                        Manufacturer: {manufacturer}
                    </li>

                    <li>
                        Units: {units}
                    </li>

                    <li>
                        Time: {time}
                    </li>

                </ul>

            
        </div>
    )
}

export default ProductList;