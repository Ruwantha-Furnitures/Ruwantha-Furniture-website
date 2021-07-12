import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Cart() {
const [itemCount, setItemCount] = React.useState(0);

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
