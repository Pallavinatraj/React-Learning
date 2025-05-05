import "../ReactState/style.css";
import react from "react";

//I want to use UseState which comes from react 

export default function App() {
    const [count, setCount] = React.useState(0);
    //count ---> current value;
    //setCount ---> Updating function value;
    return (
        //You are entering JSX LAN
        <div>
            <h1>Count : {count}</h1>
            <h2> Start editing to see magic happen!</h2>
            <button onClick={() => setCount(count + 1)}>INC</button>
            <button onClick={() => setCount(count + 1)}>DEC</button>
            <button disabled onClick={() => setCount(0)}> </button>
        </div>
    );
}