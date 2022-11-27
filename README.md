# react-dticheckboxlist

> Componente React de lista com checkbox

[![NPM](https://img.shields.io/npm/v/react-dticheckboxlist.svg)](https://www.npmjs.com/package/react-dticheckboxlist) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dticheckboxlist
```
<p align="center">
    <img alt="read before" src="screenshot3.png" />
</p>

## Código de exemplo de como usar

```jsx
import React, { Component } from 'react'
import DTICheckBoxList from 'react-dticheckboxlist'

class Example extends Component {
  const items =
    [{
      "id": "1",
      "label": "Carros",
    },

    {
      "id": "2",
      "label": "Bicicletas",
    },

    {
      "id": "3",
      "label": "Caminhões",
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

    const handleChangeSelect = (prop) => {
      setState({
        ...state,
        itemsSelecteds: prop,
      });
    };

  render() {
    return
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
  }
}
```
## Esquema de cores
<p align="center">
    <img alt="read before" src="screenshot2.png" />
</p>
## License

MIT © [lucianodoria](https://github.com/lucianodoria)
