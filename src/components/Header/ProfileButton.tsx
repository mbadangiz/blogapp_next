import Button from "@/core/components/button";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function ProfileButton() {
  const user = false;
  return (
    <div>
      {user ? (
        <UserCircleIcon />
      ) : (
        <>
          <Button>ورود</Button>
          <Button variants="outline">ثبت نام</Button>
        </>
      )}
    </div>
  );
}

export default ProfileButton;
