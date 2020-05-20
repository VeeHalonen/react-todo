import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/* PROPS:
    index = index on the ToDoList's toDoItems array, same as the key
    value = string that contains the "todo" description
    boxChecked = boolean, is the checkbox checked
    onDelete = event for destroying the list component
    onUpdate = event for updating the list item on edit
*/

const ListComponent = (props) => {
  const [currentValue, setCurrentvalue] = useState(props.value);
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleEdit = () => {
    const newVal = event.target.value;
    if (newVal !== "") {
      setIsBeingEdited(false);
      setCurrentvalue(newVal);
      // Update parent
      props.onUpdate(props.index, newVal, props.boxChecked);
    }
  };

  const handleCheckBox = () => {
    props.onUpdate(props.index, props.value, !props.boxChecked);
  };

  // Returns the todo with style depending on the item being done or not
  const getLabel = () => {
    if (props.boxChecked) {
      return (
        <Typography style={{ textDecoration: "line-through", color: "gray" }}>
          {currentValue}
        </Typography>
      );
    } else {
      return <Typography style={{}}>{currentValue}</Typography>;
    }
  };

  return (
    <ListItem>
      {isBeingEdited !== true && (
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={9}>
            <FormGroup row style={{ marginLeft: 10, padding: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.boxChecked}
                    onChange={handleCheckBox}
                    color="primary"
                    style={{ marginRight: 15, marginLeft: 5 }}
                  />
                }
                label={getLabel()}
              />
            </FormGroup>
          </Grid>
          <Grid container justify="flex-end" alignItems="center" item xs={3}>
            <Button
              onClick={() => {
                setIsBeingEdited(true);
              }}
            >
              <EditIcon />
            </Button>
            <Button
              onClick={() => props.onDelete(props.index)}
              //style={{ marginRight: 0 }}
            >
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      )}
      {isBeingEdited && (
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={1} />
          <Grid item xs={10}>
            <TextField
              autoFocus
              defaultValue={currentValue}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEdit();
                } else if (e.keyCode === 27) {
                  // 27 = esc
                  setIsBeingEdited(false);
                }
              }}
              style={{ margin: 8 }}
              fullWidth
              //multiline
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      )}
    </ListItem>
  );
};

export default ListComponent;
