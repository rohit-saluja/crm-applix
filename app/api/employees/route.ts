import { type NextRequest } from "next/server";
import prisma from "@/prisma";

export async function GET(request: NextRequest) {
  const employees = prisma.employee.findMany({});
  return Response.json(employees);
}
