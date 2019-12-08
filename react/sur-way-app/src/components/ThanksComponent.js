import React from 'react'
import ChartsComponent from './ChartsComponent';
import Box from '@material-ui/core/Box';

function ThanksComponent() {
  return (
    <React.Fragment>
      <Box width="85%" >
        <h1>Thanks for completing the Survey!</h1>
        <p>This is what the other users said.</p>
        <ChartsComponent />
      </Box>
    </React.Fragment>
  )
}


export default ThanksComponent;