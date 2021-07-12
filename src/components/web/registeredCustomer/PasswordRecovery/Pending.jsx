import React from 'react'

function Pending() {
    return (
        <div>
            <Card className={FormStyle.cardbox} style={{marginTop:'30px', marginBottom: '30px', width: '22rem',border: 'solid 3px bisque', boxShadow:'0px 0px 20px #000'}}>      
            <Form style={{padding: '20px'}}>  
                <center><img src={Avatar} style={avatar} alt='avatar'/></center><br />
                <center><h3>Password Recovery</h3></center>
                          
                <input  className={FormStyle.emailBox}
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>              
                                          
                <br /><br />
                <div align="center">
                  <Button variant="success" type="submit" style={{width: '100%'}}>Submit</Button>{' '}
                </div> <br />     
            </Form>
        </Card>
        </div>
    )
}

export default Pending
