import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { JSX } from "react/jsx-runtime";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);
  //from server
  const [priority, setPriority] = useState("");
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="w-full h-full bg-primary-gradient rounded-xl p-[5px] ">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map(
            (
              item: JSX.IntrinsicAttributes & {
                _id: string;
                title: string;
                description: string;
                priority: string;
                isCompleted?: boolean | undefined;
              }
            ) => (
              <TodoCard key={item._id} {...item} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
