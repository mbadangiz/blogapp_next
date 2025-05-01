import Button from "@/core/components/button";
import Input from "@/core/components/input";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ورود",
};

function Login() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">ورود 😁</h1>
      <div className="mb-6 space-y-5">
        <Input placeholder="نام کاربری" label="نام کاربری" required={true} />
        <Input
          type="password"
          placeholder="رمز عبور"
          label="رمز عبور"
          required={true}
        />
        <Button type="submit" className="mt-2 w-full !rounded-lg">
          ورود
        </Button>
      </div>
      <p>
        آیا تاکنون اکانتی نساخته اید؟
        <Link
          href={"/auth/signin"}
          className="text-primaryBlue-700 mx-1 underline"
        >
          اینجا کلیک کنید.
        </Link>
      </p>
    </>
  );
}

export default Login;
