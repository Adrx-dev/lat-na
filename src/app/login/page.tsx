import Link from "next/link";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { GradientBackground } from "@/components/gradient";

const LoginPage = async () => {
  const session = await auth();
  if (session?.user) return redirect("/");

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center relative">
      {/* Background */}
      <GradientBackground />

      {/* Content */}
      <div className="z-10 px-4 sm:px-6 md:px-0">
        <div className="mx-auto w-full max-w-md rounded-xl bg-white shadow-md border border-black/10 px-6 py-10 sm:px-10 sm:py-12">
          {/* ✅ Logo as Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/bini.png" // ✅ Replace with your actual image path in /public
              alt="Lakambini Logo"
              width={120}
              height={120}
              className="h-auto w-auto"
              priority
            />
          </div>

          {/* Google Sign-In Button */}
          <form
            action={async () => {
              "use server";
              await signIn("google", { callbackUrl: "/" });
            }}
          >
            <button
              type="submit"
              className="w-full justify-center space-x-2 h-10 bg-black/80 hover:bg-black transition duration-300 text-white rounded-full flex items-center px-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm sm:text-base">Sign in with Google</span>
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 border-t pt-4 text-center text-sm text-gray-600">
           Do you want to exit?{" "}
            <Link href="/" className="font-medium hover:text-gray-800 transition">
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
