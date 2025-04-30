import Button from "@/core/components/button";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function ProfileButton() {
  const user = false;
  return (
    <>
      {user ? (
        <Link href={"/profile"}>
          <UserCircleIcon className="text-primaryBlack size-9" />
        </Link>
      ) : (
        <div className="flex content-center items-center gap-2">
          <Link href={"/auth/login"}>
            <Button
              variants="outline"
              className="!rounded-4xl !text-sm lg:!text-base"
            >
              ورود / ثبت نام
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
