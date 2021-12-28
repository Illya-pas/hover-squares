import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {useDispatch} from 'react-redux'
import {showAlert} from "../redux/actions.js"

const useStyles = makeStyles({
  square: {
    border: "1px solid black",
    height: 35,
    width: 35,
  },
  active: {
    "background-color": "blue",
  }
});

export default function Square({x, y}) {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [isActive, setIsActive] = useState(false)

  function handleAction () {
    dispatch(showAlert(`row ${x+1} col ${y+1}`))
    setIsActive(!isActive)
  }

  return (
    <div
    onMouseEnter={handleAction}
    className={clsx(
      classes.square,
      isActive && classes.active
    )}
    >
    </div>
  );
}