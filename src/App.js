import {useState} from 'react';
import DropDown from "./components/DropDown"
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert';
import SubmitButton from "./components/SubmitButton"
import {useSelector} from 'react-redux'
import Field from "./components/Field"

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  },
  app: {
    display: "flex",
  },
  header: {
    display: "flex",
    alignItems: "center"
  },
  alert: {
    width: 200,
    marginTop: 10
  },
  right: {
    marginLeft: 40,
  }
});

function App() {
  const classes = useStyles();
  const [mode, setMode] = useState('');

  const alerts = useSelector(state => state.alerts)
  const tip = useSelector(state => state.tip)

  return (
    <div className={classes.root}>
      <div className={classes.app}>
        <div className={classes.left}>
          <div className={classes.header}>
            <DropDown tip={tip} mode = {mode} setMode={setMode}/>
            <SubmitButton mode = {mode}/>
          </div>
          <Field />
        </div>

        <div className={classes.right}>
          <h1>Hover squares:</h1>
            {alerts.map((alert, index) => {
              return <Alert className={classes.alert} key={index} severity="info">{alert}</Alert>
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
