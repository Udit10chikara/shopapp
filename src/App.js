import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h4>Redux impementaion</h4>
      <p>Counter: {props.mycounter}</p>
      <button onClick={()=>props.increment()}>+</button>
      <button onClick={()=>props.decrement()}>-</button>
      <button onClick={()=>props.reset()}>Reset</button>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    mycounter : state.count
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    increment:()=>{
      dispatch({type:'INC',payload:2})
    },
    decrement:()=>{
      dispatch({type:'DEC',payload:1})
    },
    reset:()=>{
      dispatch({type:'RESET'})
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
