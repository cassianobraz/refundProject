import { Outlet } from "react-router";

import logoSvg from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className='w-screen h-screen bg-gray-400 flex flex-col items-center justify-center text-gray-100'>
      <main className='bg-gray-500 p-8 rounded-md flex flex-col items-center md:min-w-[462px]'>
        <img src={logoSvg} alt="Logo" className='my-8' />

        <Outlet />
      </main>
    </div>
  )
}