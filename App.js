import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react'

function App() {
  const [count, setCount] = useState(0);
 

  
 
  return (
    <div className="App">
      <Container>
         
      <div >
      
      </div>
      

      <Segment compact padded="very" raised
      style={{
        margin: "340px ",
        marginTop: "235px",
        marginBottom: "80px"
      }}>
      <Grid columns= {1}  style={{height: "150px",width: "270px"}} >

        <GridRow centered>
          <GridColumn>
            <h1 align = "center">Count</h1>
            <h2 align = "center">{count}</h2>
            <Button color='green'  onClick={() =>setCount(count+1)}  >Increment</Button>
            <Button  color='red' onClick={() => setCount(count-1)} disabled ={count === 0}>Decrement</Button>
          </GridColumn>
         
          </GridRow>
          
      </Grid>
      </Segment>
      <h1 align = "center"><strong/>Done by: Raja Hima Venkata Sai Koushik- 12002497</h1>
           
      </Container>
      
    </div>
    
  );
}

export default App;
