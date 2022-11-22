import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import cn from 'classnames';
import { FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: 'auto',
    },
    paper: {
      height: 400,
      overflow: 'auto',
      border: '1px solid #dddddd',
      boxShadow: 'none',
    },
    checkBoxItem: {
      paddingLeft: 5,
    },
    checked: {
      color: '#3f51b5',
    },
    listItemIcon: {
      minWidth: 40,
      color: '#3f51b5',
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
    checkBoxSelected: {
      backgroundColor: '#f7f7f7',
    },
  }),
);

export default function DTICheckBoxList(props) {
  const classes = useStyles();

  const [checkedAll, setStateCheckedAll] = React.useState(false);

  const handleToggle = data => () => {
    const checked = props.selectedItems.some(v => v.id === data.id);
    const newCheckedItem = [...props.selectedItems];

    if (checked) {
      const currentIndex = props.selectedItems.findIndex(obj => obj.id === data.id);

      newCheckedItem.splice(currentIndex, 1);
    } else {
      newCheckedItem.push(data);
    }

    props.onChange(newCheckedItem);
  };

  const checkAllhandleChange = (event) => {
    const checked = event.target.checked;
    const newCheckedItem = [...props.selectedItems];

    if (checked) {
      props.items.forEach((dataItem) => {
        let exist = false;

        newCheckedItem.forEach(() => {
          if (!exist) {
            exist = newCheckedItem.some(v => v.id === dataItem.id);
          }
        });

        if (!exist) {
          newCheckedItem.push(dataItem);
        }
      });
    } else {
      newCheckedItem.splice(0);
    }

    props.onChange(newCheckedItem);

    setStateCheckedAll(checked);
  };

  const customDTICheckBoxList = () => (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedAll}
            onChange={checkAllhandleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Selecionar todos"
      />
      <Paper className={classes.paper}>
        <List dense component="div" role="list" className={classes.list}>
          {props.items.map((data, index) => {
            const labelId = `id-list-item-${data.id}-label`;

            const checked = props.selectedItems.some(v => v.id === data.id);

            return (
              <ListItem
                key={index}
                role="listitem"
                className={cn([classes.checkBoxItem, checked ? classes.checkBoxSelected : ''])}
                button
                onClick={handleToggle(data)}
              >
                <ListItemIcon className={classes.listItemIcon}>
                  <Checkbox
                    classes={{ checked: classes.checked }}
                    checked={checked}
                    tabIndex={-1}
                    disableRipple={false}
                    color="primary"
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={data.label} />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </Paper>
    </>
  );

  return customDTICheckBoxList();
}
