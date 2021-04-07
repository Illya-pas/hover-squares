import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tip: {
    position: "absolute",
    marginLeft: 8
  }
}));

export default function DropDown({mode, setMode, tip}) {
  const classes = useStyles();

  const handleChange = async (event) => {
    setMode(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mode}
          onChange={handleChange}
        >
          <MenuItem value="easyMode">Easy</MenuItem>
          <MenuItem value="normalMode">Normal</MenuItem>
          <MenuItem value="hardMode">Hard</MenuItem>
        </Select>
      </FormControl>
      {tip && <FormHelperText className={classes.tip} error>{tip}</FormHelperText>}
    </div>
  );
}