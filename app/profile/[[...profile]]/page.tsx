import { UserProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import Orders  from '@/app/orders/page'

const Profile = async () => {

  const { userId } = await auth();
  const user = await currentUser();
  const isAuth = !!userId;

  if (!isAuth) {
    redirect("/");
  }

  {/* The profile is working only through ngrok */}

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-2xl">{user?.username}</h1>
      
      <Orders />
    </div>
  );
};

export default Profile;
