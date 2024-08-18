import { type NextRequest } from "next/server";
import prisma from "@/prisma";

export async function GET(request: NextRequest) {
  const employees = await prisma.employee.findMany({});
  return Response.json(employees);
}

export async function Post(request: NextRequest) {
  console.log(request.formData);
  console.log(request.body);

  await prisma.employee.create({
    data: {
      name: "rohit",
      address: "ajsdfjl",
      email: "lajsdflj",
      phone: "jlasjdf",
    },
  });
  return Response.json(true);
}
