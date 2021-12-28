import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {useSelector} from 'react-redux'
import Square from "./Square"

const useStyles = makeStyles({
  root: {
  	display: "flex",
  	flexWrap: "wrap",
  }
});

export default function Field() {

  const classes = useStyles();
  const field = useSelector(state => state.cells)

  const [cells, setCells] = useState([])

  useEffect(() => {
  	const surface = []
  	let index = 0

	  for (let x=0; x<field; x++) {
	  	for (let y=0; y<field; y++) {
	  		++index
		  	surface.push(<Square x={x} y={y} key={index}/>)
		  }
	  }
	  setCells(surface)

  }, [field])

  const getWidth = () => {
  	return 37 * field
  }

  return (
    <div 
    	className={classes.root}
    	style={{width: getWidth()}}
    >
    	{cells.map(cell => cell)}
    </div>
  );
}