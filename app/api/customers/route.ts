import { type NextRequest } from "next/server";
import prisma from "@/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const customers = await prisma.customer.findMany({});
  return Response.json(customers);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, address, email, phone } = data;
  try {
    await prisma.customer.create({
      data: {
        name,
        address,
        email,
        phone,
      },
    });
    return Response.json({ message: "Customer created successfully" }, { status: 200 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return Response.json({ error: `Unique email id is required` }, { status: 403 });
      }
    }
    console.log(e);
    return Response.json({ error: "unique value is required" }, { status: 500 });
  }
}
