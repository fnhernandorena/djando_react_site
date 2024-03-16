import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
    const navigate = useNavigate();

    return (
        <div className="bg-sky-200 my-1 p-2" onClick={() => {
            navigate(`/tasks/${task.id}`);
        }}>
            <h2 className=" border-b-2 border-r-2 border-black text-2xl font-extrabold">{task.title}</h2>
            <p className=" text-xl">{task.description}</p>
            {task.done==true && <p className="rounded-3xl bg-green-300 w-48 text-center font-bold">Is completed</p> ||<p className="rounded-3xl bg-red-300 w-48 text-center font-bold">Isn`t completed</p>}
        </div>
    );
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired
};
