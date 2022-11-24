import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { useState } from 'react';
import DTICheckBoxList from './components/DTICheckBoxListComponent';
import './App.css';

function App() {

  const items =
    [{
      "id": "1",
      "label": "Carros",
      "completed": false,
    },

    {
      "id": "2",
      "label": "Bicicletas",
      "completed": false,
    },

    {
      "id": "3",
      "label": "Caminhões",
      "completed": false,
    }
    ]

  const itemsSelecteds =
    [

      {
        "id": "2",
      },

      {
        "id": "3",
      }
    ]

  const [state, setState] = useState({
    items: items,
    itemsSelecteds: itemsSelecteds,
  });

  const handleChangeSelect = (prop:any) => {
    setState({
      ...state,
      itemsSelecteds: prop,
    });
  };

  return (
    <Container>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Typography
            variant="h6"
          >
            DTICheckBoxList
          </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        component="form"
      >
        <Container maxWidth="xl">
          <Grid item xs={12} lg={12}>
            <DTICheckBoxList
              items={state.items}
              selectedItems={state.itemsSelecteds}
              showSelectedAll={true}
              checkBoxSelectedAllColor={'#3f51b5'}
              checkBoxSelectedAllLabelColor={'#3f51b5'}
              checkBoxColor={'#3f51b5'}
              checkBoxLabelColor={'#3f51b5'}
              checkBoxCheckedColor={'#f95738'}
              backgroundColorCheckBoxSelected={'#f7f7f7'}
              onChange={handleChangeSelect}
            />
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
export default App;
