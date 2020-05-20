import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ListComponent from "./ListComponent";
import AlertDialogClear from "./AlertDialogClear";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";

const TestComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const [showDialogClear, setShowDialogClear] = useState(false);

  /* todoItems contains ListComponent data in the form of:
      {
        value: string - todo item's description
        boxChecked: boolean - whether the done box is checked
      }
  */
  const [todoItems, setTodoItems] = useState([]);

  const textInput = useRef();

  // Sets the focus to the text field
  const focusTextInput = () => {
    textInput.current.focus();
  };

  useEffect(focusTextInput, []);

  // Deletes the list item (event raised in ListComponent)
  const deleteListComponent = (index) => {
    // Get new array without specified index
    const newTodos = todoItems.filter((todoItem, i) => i !== index);
    // Set it
    setTodoItems(newTodos);

    // Focusing the text field is inconvenient in long lists, so let's not
  };

  // Adds what's written in the text field to the list
  const addItem = () => {
    if (inputValue !== "") {
      console.log("Adding: ", inputValue);
      setTodoItems([...todoItems, { value: inputValue, boxChecked: false }]);
      setInputValue("");
    }
    focusTextInput();
  };

  // Keep the variable that tracks what's written in the text field up to date
  const handleTextFieldChange = (event) => {
    setInputValue(event.target.value);
  };

  const updateItems = (i, newValue, isChecked) => {
    const newTodo = todoItems.map((todo, index) => {
      if (index === i) {
        return { value: newValue, boxChecked: isChecked };
      }
      // Leave the others be
      return todo;
    });
    setTodoItems(newTodo);
  };

  // Creates the list components based on the current list of items in todoItems
  const getListItems = () => {
    return (
      <List>
        {todoItems.map(function (item, index) {
          return (
            <ListComponent
              value={item.value}
              key={index + item.value}
              index={index}
              boxChecked={item.boxChecked}
              onDelete={deleteListComponent}
              onUpdate={updateItems}
            />
          );
        })}
      </List>
    );
  };

  const deleteAll = () => {
    setShowDialogClear(true);
  };

  const handleCloseAlertDialogClear = (clearConfirmed) => {
    setShowDialogClear(false);
    if (clearConfirmed) {
      setTodoItems([]);
      focusTextInput();
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
      }}
    >
      <AlertDialogClear
        showDialog={showDialogClear}
        closeDialog={handleCloseAlertDialogClear}
      />
      <Grid container justify="space-between">
        <Grid item xs={1} />
        <Grid item xs={10}>
          <TextField
            id="standard-full-width"
            label="Add Item to Your To Do List"
            value={inputValue}
            onChange={handleTextFieldChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem();
              }
            }}
            inputRef={textInput}
            style={{ margin: 8 }}
            placeholder="What do you need to do?"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid
          container
          justify="space-between"
          spacing={0}
          item
          xs={10}
          style={{ marginTop: 15, marginBottom: 10 }}
        >
          <Grid item style={{ marginLeft: 10 }}>
            <Button variant="outlined" onClick={addItem} color="primary">
              Add Item
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              onClick={deleteAll}
              color="secondary"
              disabled={todoItems.length === 0}
            >
              Clear List
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={12}>
          {getListItems()}
        </Grid>
        <Grid item xs={12}>
          <p></p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TestComponent;
