import { Outlet, Navigate } from "react-router-dom"

export const AuthLayout = () => {

	const isAuthenticated = false

	return (
		<>
		{isAuthenticated ? (
			<Navigate to='/' />
		) : 
		<section className="flex flex-1 justify-center items-center flex-col py-10">
			<Outlet />
		</section>}

		<img src="src/assets/jpeg_png/food1.jpeg" alt="logo" className='hidden xl:block h-screen w-5/12 bg-no-repeat rounded-l-3xl' />
		</>
	)
}
