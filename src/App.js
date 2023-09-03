import React, {useState} from 'react';
import Title from './components/Title';



function App() {
const  [name, setName] = useState("Abushad");
const  [date, setDate] = useState("01/02/2023");
const handleNameChane = (e) => {
  setName(e.target.value);
}

const handleDateChane = (e) => {
  setDate(e.target.value);
}
  return (
    <div className="flex flex-col items-center mt-5 bg-slate-500 h-screen">
       <Title title={name} />
       <Title title={date} />
        <input  type='text' value={"Enter Your Name"} className="m-3  w-96 text-center p-3" onChange={handleNameChane} />
        <input  type='date' value={"Select Date"}  className="m-3  w-96 text-center p-3" onChange={handleDateChane} />

    </div>
  );
}

export default App;
