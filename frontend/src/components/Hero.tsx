import React from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="flex h-full">
					<section className="w-1/2 p-10 pt-0">
						<div className="flex flex-col justify-center h-full px-24">
							<p className="text-4xl font-bold">Find the perfect recipe</p> 
							<p className="text-4xl font-normal mb-10">Create and start sharing</p>
							<p className="mb-10 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit recusandae accusamus libero repellat architecto aspernatur possimus quae tempore at fugiat non nam illum quod deserunt magnam, quas laborum incidunt?</p>
							<a href="#second">
								<Button className='bg-violet-500 hover:bg-violet-600 p-2 w-1/2 text-md' type="button">
									Explore &#x2197;
								</Button>
							</a>
						</div>
					</section>
					
					<section className="w-1/2 flex p-5 pr-0 pb-20 space-x-8">
						<div className="h-full w-1/2 max-w-full overflow-hidden rounded-lg">
							<img alt="photo" src="src/assets/other/food1.jpeg" className="h-full w-full object-cover" />
						</div>
						<div className="h-full w-1/4 max-w-full overflow-hidden rounded-lg custom-element">
							<img alt="photo" src="src/assets/other/food6.jpeg" className="h-full w-full object-cover" />
						</div>
						<div className="h-full w-1/4 max-w-full overflow-hidden rounded-l-lg custom-element">
							<img alt="photo" src="src/assets/other/food3.jpeg" className="h-full w-full object-cover" />
						</div>
					</section>

				</div>
  );
};