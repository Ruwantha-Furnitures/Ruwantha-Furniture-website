import React from 'react';

function getMessageTables() {
const [messages,setMesages]=useState([]);    

    useEffect(() => {
        viewAllMessages();        
    },[])

    const viewAllMessages = async () => {
        try {           
        let response = await axios.get("http://localhost:8080/api/message");
        console.log(response.data); // received products from the backend API
        setMesages(response.data);// set the received products into the products state array
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
        <Card style={{marginBottom: '20px'}}>
            <Form style={{padding: '20px'}}>
                <Row sm={12} style={rowStyle}>
                    <Col sm={12}>
                        <h2 style={{textAlign:'center'}}>Shopping Cart</h2><br />
                        <Table responsive="sm"  class="table table-hover table-bordered p-5">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    {/* <th>ID</th> */}
                                    <th>first_name</th>
                                    <th>last_name</th>
                                    <th>contact_number</th>
                                    <th>email</th>
                                    <th>details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((productList,i) =>(                                                                                  
                                <tr key={i}>                                        
                                    <td>{i+1}</td>
                                    <td>{productList.first_name}</td>                                    
                                    <td>{productList.last_name} </td>
                                    <td>{productList.contact_number} </td>
                                    <td>{productList.email}%</td>
                                    <td>{productList.details}</td>                                    
                                </tr>   
                                ))}                              
                            </tbody>
                        </Table>                                                
                    </Col> 
                </Row>
            </Form>
        </Card>                        
        </div>
    )
}

export default getMessageTables
