import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <div>
           <Link to='/tasks'><h1 className="my-1 rounded text-center text-4xl font-extrabold bg-yellow-200 p-7">Task App</h1></Link> 
            <Link to='/create-task'><p className="my-1 rounded text-center text-3xl font-extrabold bg-red-200 p-2">Create task</p></Link>
        </div>
    )
}