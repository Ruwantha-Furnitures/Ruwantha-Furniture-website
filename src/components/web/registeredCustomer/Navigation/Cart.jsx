import React , { useState , useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Cart() {
const [itemCount, setItemCount] = useState(0);//0 should be change according to the cart table.

return (
	<div style={{ display: "block", padding: 0 }}>
	
	<div>
		<Badge color="secondary" badgeContent={0}>
		<ShoppingCartIcon  style={{color: '#fc7a30'}}/>{" "}
		</Badge>		
	</div>
	</div>
);
}
