import { type NextRequest } from "next/server";
import prisma from "@/prisma";
import { Prisma } from "@prisma/client";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const data = await request.json();
  const { name, address, email, phone } = data;
  try {
    await prisma.employee.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name,
        address,
        email,
        phone,
      },
    });
    return Response.json({ message: "Employee update successfully" }, { status: 200 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return Response.json({ error: `Unique email id is required` }, { status: 403 });
      }
    }
    return Response.json({ error: "unique value is required" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const data = await request.json();
  const { id } = data;
  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });
    return Response.json({ message: "Employee delete successfully" }, { status: 200 });
  } catch (e) {
    return Response.json({ error: "something went wrong" }, { status: 500 });
  }
}
