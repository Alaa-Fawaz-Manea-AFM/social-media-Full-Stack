"use client";

import { useUserContext } from "@/context/MyState";
import { logoutAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { Log_Out } from "@/public/assets";
import { BiLogIn } from "react-icons/bi";
import { IUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";

type IBtnLog = {
  user: IUser | null;
  toggleMenu: boolean;
};

const BtnLogOutAndIn = ({ user, toggleMenu }: IBtnLog) => {
  const { setUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    const result = await logoutAction();

    if (!result.success) {
      toast.error("Error logOut");
      setLoading(false);
      return;
    }

    setUser(null);
    router.refresh();
    router.push("/log-in");
    setLoading(false);
  };

  return (
    <>
      {user?.id ? (
        <button
          disabled={loading}
          title="Log Out"
          onClick={handleSignOut}
          className={`${loading ? "opacity-5" : ""} flex items-center ssx:pl-8 gap-3 cursor-pointer`}
        >
          <Image
            width={35}
            height={30}
            src={Log_Out}
            alt="Log Out"
            className="cursor-pointer"
            unoptimized
          />

          {!toggleMenu && <span className="font-semibold text-xl">LogOut</span>}
        </button>
      ) : (
        <Link
          title="Log in"
          href="/log-in"
          className="flex items-center ssx:pl-8 gap-3 cursor-pointer"
        >
          <BiLogIn size={35} color="#877EFF" />
          {!toggleMenu && <span className="font-semibold text-xl">Log in</span>}
        </Link>
      )}
    </>
  );
};

export default BtnLogOutAndIn;
