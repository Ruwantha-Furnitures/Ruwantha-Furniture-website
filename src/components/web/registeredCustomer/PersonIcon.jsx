import React from "react";
import Badge from "@material-ui/core/Badge";
import Person from '@material-ui/icons/Person';

function PersonIcon(props) {
    return (        
        <div style={{ display: "block", padding: 0 }}>        
            <div>                
                <Person style={{color: '#fc7a30'}}/>{" "}                
            </div>
        </div>        
    );
}

export default PersonIcon;

