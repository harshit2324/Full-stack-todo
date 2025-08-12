"use server"

import { prisma } from "@/utils/prisma"
import { error } from "console";
import { revalidatePath } from "next/cache";

export async function  createTodo(formData) {
  const input = formData.get('input')
  if(!input.trim()) {
    return;
  }
  await prisma.todo.create({
    data: {
        title:input,
    },
  });
  revalidatePath("/");
    
}


export async function  changeStatus(formData) {
    const inputId = formData .get("inputId") 
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        }
    });
    const updateStatus = !todo?.isComplete;

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            isComplete: updateStatus,
        }
    }),
    revalidatePath("/")
}


export async function  editTodo(formData) {
    const newtitle = formData.get("newtitle")
    const inputId = formData.get("inputId")

    if( newtitle == ""){
    return;
    }

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data:{
            title: newtitle,
        }
    });
    revalidatePath("/")
}

export async function DeleteTodo(formData) {
    const inputId = formData.get("inputId")
    await prisma.todo.delete({
        where: {
            id: inputId,
        }
    });
    revalidatePath("/")
}