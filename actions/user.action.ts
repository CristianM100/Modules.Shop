/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

//import User from "@/lib/models/user.modal";
import User from "@/modals/user.modal";
//import User from "@/modals/user.modal";
//import { connect } from "@/db";
import dbConnect from "@/lib/dbConnect"


export async function createUser(user: any) {
  try {
    await dbConnect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
