import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const utils = {};

const useAppState = () => {

  const [percentage, setPercentage] = React.useState(0);
  const [time, setTime] = React.useState(50);


  React.useEffect(() => {
        const timerId = setTimeout(() => {
          if(percentage < 100){
            setPercentage(percentage + 1);
          } else {
            setPercentage(0);
            setTime(time - 5)
          }

        }, time);
        return () => clearTimeout(timerId);
      }
  );

  return {percentage, setPercentage};
};

const ClickerElement = (props) => {

  return (
      <div style={{width: '50%'}}>
        <ProgressBar  now={props.percentage}/>
      </div>
  )
};


const App = () => {

  const {percentage, setPercentage} = useAppState();

  return (<div>

    <ClickerElement percentage={percentage}/>
  </div>);

};

export default App;