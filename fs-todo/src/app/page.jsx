import AddTodo from "../components/todos/AddTodo";
import React from "react";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isComplete: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className=" text-4xl font-extrabold uppercase"> Todo app</span>
      <div className="flex justify-center flex-col items-center">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo) => (
            <div className="w-full" key={todo.id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
