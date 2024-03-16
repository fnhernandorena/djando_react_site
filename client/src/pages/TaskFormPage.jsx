import { useForm } from "react-hook-form";
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if(params.id){
        updateTask(params.id, data)
    } else{
    await createTask(data);
    }
    navigate("/tasks");
  });

  useEffect(()=>{
   async function loadTask(){if(params.id){
        const {data} = await getTask(params.id)
    setValue('title', data.title)
    setValue('description', data.description)
    } 
    }
    loadTask();
  })

  return (
    <div className="max-w-screen-sm mt-5">
      <form onSubmit={onSubmit} className="w-full">
        <input
        className="w-full mb-4 p-2 text-3xl"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span className="text-3xl text-red-600 font-extrabold my-2 ">Title is required!</span>}
        <textarea
        className="w-full p-2 text-2xl"
          placeholder="Description"
          rows="3"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span className="text-3xl text-red-600 font-extrabold my-2 ">Description is required!</span>}
        <div>
        <button className="w-5/12 bg-sky-200 rounded text-2xl hover:bg-green-200 m-1">Save</button> 
        {params.id && (
        <button
        className="w-5/12 bg-sky-200 rounded text-2xl hover:bg-red-200 m-1"
          onClick={async () => {
            const acepted = window.confirm(
              "Are you sure you want to delete this?"
            );
            if (acepted) {
              await deleteTask(params.id);
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}</div>
      </form>
     
    </div>
  );
}
