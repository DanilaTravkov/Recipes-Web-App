import { Outlet, Navigate } from "react-router-dom"

export const AuthLayoutPages = () => {

	const isAuth = false

	return (
		<> {isAuth ? 
			(
				<Navigate to='/' />
			) :
			<section className="flex flex-1 justify-center items-center flex-col">
			<Outlet />
			</section>}

			<img src="src/assets/other/form background.jpeg" alt="logo" className='hidden xl:block h-screen w-1/2 bg-no-repeat' />
		</>
	)
}