import SignupForm from '@/app/components/signup-form';
import Image from "next/image"
import Img from "@/public/img/logo.svg"
 
export default function SignupPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src={Img}
                  width="32"
                  alt="N"
                  height="32"
                  className="w-8"
                />
              </span>
            <span>MerchantMatey</span>
          </span>
        <SignupForm />
      </div>
    </main>
  );
}