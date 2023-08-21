import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar z-10">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logotransparent.png"
            alt="logo"
            width={80}
            height={90}
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <Link href="/">
              <h1>Home</h1>
            </Link>
            <Link href="/create-question">
              <h1>New Question</h1>
            </Link>
            <ProfileMenu session={session} />
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
