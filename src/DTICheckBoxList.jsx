import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import { FormControlLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: 'auto'
    },
    paper: {
      height: 400,
      overflow: 'auto',
      border: '1px solid #dddddd',
      boxShadow: 'none'
    },
    checkBoxItem: {
      paddingLeft: 5
    },
    checked: {
      color: '#3f51b5'
    },
    listItemIcon: {
      minWidth: 40,
      color: '#3f51b5'
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      margin: theme.spacing(0.5, 0)
    }
  })
)

const DTICheckBoxList = (props) => {
  const classes = useStyles()

  const [checkedAll, setStateCheckedAll] = React.useState(false)

  const handleToggle = (data) => () => {
    const checked = props.selectedItems.some((v) => v.id === data.id)
    const newCheckedItem = [...props.selectedItems]

    if (checked) {
      const currentIndex = props.selectedItems.findIndex(
        (obj) => obj.id === data.id
      )

      newCheckedItem.splice(currentIndex, 1)
    } else {
      newCheckedItem.push(data)
    }

    props.onChange(newCheckedItem)
  }

  const checkAllhandleChange = (event) => {
    const checked = event.target.checked
    const newSelectedItems = [...props.selectedItems]

    props.items.forEach((dataItem) => {
      if (dataItem.disabled) return

      if (checked) {
        if (!newSelectedItems.some((v) => v.id === dataItem.id)) {
          newSelectedItems.push({ id: dataItem.id })
        }
      } else {
        var index = newSelectedItems.findIndex((x) => x.id === dataItem.id)

        newSelectedItems.splice(index, 1)
      }
    })

    props.onChange(newSelectedItems)

    setStateCheckedAll(checked)
  }

  return (
    <div>
      {props.showSelectedAll && (
        <FormControlLabel
          style={{
            color: props.checkBoxSelectedAllLabelColor
          }}
          control={
            <Checkbox
              checked={checkedAll}
              onChange={checkAllhandleChange}
              name='checkedB'
              style={{
                color: props.checkBoxSelectedAllColor
              }}
            />
          }
          label={props.labelSelectedAll}
        />
      )}
      <Paper className={classes.paper}>
        <List dense component='div' role='list' className={classes.list}>
          {props.items.map((data, index) => {
            const labelId = `id-list-item-${data.id}-label`

            const checked = props.selectedItems.some((v) => v.id === data.id)

            return (
              <ListItem
                key={index}
                role='listitem'
                disabled={data.disabled}
                className={classes.checkBoxItem}
                style={{
                  backgroundColor: checked
                    ? props.backgroundColorCheckBoxSelected
                    : ''
                }}
                button
                onClick={handleToggle(data)}
              >
                <ListItemIcon className={classes.listItemIcon}>
                  <Checkbox
                    id={data.id}
                    classes={{ checked: props.checkBoxCheckedColor }}
                    checked={checked}
                    tabIndex={-1}
                    disableRipple={false}
                    disabled
                    inputProps={{ 'aria-labelledby': labelId }}
                    style={{
                      color: props.checkBoxColor
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={data.label}
                  style={{
                    color: props.checkBoxLabelColor
                  }}
                />
              </ListItem>
            )
          })}
          <ListItem />
        </List>
      </Paper>
    </div>
  )
}

export default DTICheckBoxList
