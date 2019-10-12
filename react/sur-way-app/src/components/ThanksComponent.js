import React from 'react'
import ChartsComponent from './ChartsComponent';
import { Grid } from '@material-ui/core';

function ThanksComponent() {
  return (
    <React.Fragment>
      <h1>Thanks for completing the Survey!</h1>
      <p>This is what the other users said.</p>


      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={6}>
          <ChartsComponent />
        </Grid>

      </Grid>


    </React.Fragment>
  )
}


export default ThanksComponent;