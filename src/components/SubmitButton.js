import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import {getCells} from "../redux/actions.js"

const useStyles = makeStyles({
  button: {
    height: "fit-content",
    marginLeft: 20
  }
});

export default function SubmitButton({mode}) {

	const classes = useStyles();
	const dispatch = useDispatch();

  return (
		<Button 
		className={classes.button}
		variant="contained"
		color="primary"
		onClick={() => dispatch(getCells(mode))}
		>
		  Start
		</Button>
  );
}