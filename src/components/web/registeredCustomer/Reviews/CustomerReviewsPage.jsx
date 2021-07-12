import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import { Container} from 'reactstrap';
import Subnavigation from "../Navigation/Subnav";
import Topimg from '../../../../assets/topimg26.jpg';
import HistortTable from "./PurchasedHistoryTable";

function CustomerReviewsPage() {
    const contactImg = {
        backgroundImage: `url(${Topimg})` ,
        repeat: 'none',
        backgroundSize: 'cover',
        padding: '0',        
        MaxWidth: "100%"     
    }
    return (
        <div>                                     
            <Navigation></Navigation> 
            <Subnavigation></Subnavigation> 
            <br />
            <Container align='left'>
                <HistortTable></HistortTable>
            </Container> 
            <br /><br /><br /><br />                                                                                  
            <Footer></Footer>    
        </div>
    )
}

export default CustomerReviewsPage
