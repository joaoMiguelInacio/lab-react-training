import './App.css';
import data from './data/berlin.json';

import IdCard from './components/IdCard';

function App() {
    return (
      <div className="cards-container">
        <IdCard data = {data[0]}/>
        <IdCard data = {data[1]}/>
        <IdCard data = {data[2]}/>
        <IdCard data = {data[3]}/>
        <IdCard data = {data[4]}/>
        <IdCard data = {data[5]}/>
        <IdCard data = {data[6]}/>
        <IdCard data = {data[7]}/>
        <IdCard data = {data[8]}/>
        <IdCard data = {data[9]}/>
        <IdCard data = {data[10]}/>
        <IdCard data = {data[11]}/>
        <IdCard data = {data[12]}/>
        <IdCard data = {data[13]}/>
        <IdCard data = {data[14]}/>
        <IdCard data = {data[15]}/>
        <IdCard data = {data[16]}/>
        <IdCard data = {data[17]}/>
        <IdCard data = {data[18]}/>
        <IdCard data = {data[19]}/>
        <IdCard data = {data[20]}/>
        <IdCard data = {data[21]}/>
        <IdCard data = {data[22]}/>
        <IdCard data = {data[23]}/>
        <IdCard data = {data[24]}/>
        <IdCard data = {data[25]}/>
        <IdCard data = {data[26]}/>
        <IdCard data = {data[27]}/>
      </div>
    );
}

export default App;