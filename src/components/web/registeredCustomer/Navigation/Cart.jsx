import React , { useState } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect } from "react";
import axios from "axios";

export default function Cart() {
const [itemCount, setItemCount] = useState(0);//0 should be change according to the cart table.

useEffect(() =>{
	setCartValue()
},[]);

const setCartValue = async () => {
	const customer_id = localStorage.getItem('CustomerID');
	
	try{		
		const cartResponse = await axios.get(`http://localhost:8080/api/customerCart/customer_id/${customer_id}`);
		console.log(cartResponse.data)
		console.log(cartResponse.data.length)

		let counter = 0;

		{cartResponse.data.map((cartList) =>( 			
			counter = (Number)(cartList.quantity) + counter
		))}

		console.log(counter)
		setItemCount(counter)

	}catch(error){
		console.log(error)
	}
}

return (
	<div style={{ display: "block", padding: 0 }}>
	
	<div>
		<Badge color="secondary" badgeContent={itemCount}>
		<ShoppingCartIcon  style={{color: '#fc7a30'}}/>{" "}
		</Badge>		
	</div>
	</div>
);
}
