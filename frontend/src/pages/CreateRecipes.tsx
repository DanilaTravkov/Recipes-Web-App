import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
	FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'

export const CreateRecipes = () => {

	const items = [
		{
			id: "recents",
			label: "Recents",
		},
		{
			id: "home",
			label: "Home",
		},
		{
			id: "applications",
			label: "Applications",
		},
		{
			id: "desktop",
			label: "Desktop",
		},
		{
			id: "downloads",
			label: "Downloads",
		},
		{
			id: "documents",
			label: "Documents",
		}
	] as const

	const items2 = [
		{
			id: "recents2",
			label: "Recents",
		},
		{
			id: "home2",
			label: "Home",
		},
		{
			id: "applications2",
			label: "Applications",
		},
		{
			id: "desktop2",
			label: "Desktop",
		},
		{
			id: "downloads2",
			label: "Downloads",
		},
		{
			id: "documents2",
			label: "Documents",
		}
	]

  const createRecipeSchema = z.object({
    recipeName: z.string().min(2).max(50),
    ingredients: z.string().min(5),
		items: z.array(z.string()).refine((value) => value.some((item) => item), {
			message: "You have to select at least one item.",
		}),
		items2: z.array(z.string()).refine((value) => value.some((item) => item), {
			message: "You have to select at least one item.",
		}),
    instructions: z.string().min(10),
  });

  interface userContext {
    isLoggedIn: boolean;
    message: string;
  }

  const context: userContext = useContext(AuthContext);

  const form = useForm<z.infer<typeof createRecipeSchema>>({
    resolver: zodResolver(createRecipeSchema),
    defaultValues: {
      recipeName: "",
      ingredients: "",
			items: ["recents", "home"],
      instructions: "",
    },
  });

  function onSubmit(values: z.infer<typeof createRecipeSchema>) {
    console.log("Message passed from context: ", context.message);
    console.log("User passed values: ", values);
  }

  return (
    <div className="flex flex-1 flex-col w-full h-screen">
      <Form {...form}>
        <div className="flex relative bg-white/10 h-full flex-col items-start justify-start p-5">
          <p className="mb-5 text-2xl font-bold">Create recipe</p>
						<Link className="absolute bottom-0 left-0 p-5 text-sm" to="/">
							Return to the main page
						</Link>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 flex flex-col gap-2 w-full"
          >

            {/* Additional Recipe Fields */}
            <div className='flex'>
            <div className='w-1/2'>
            <FormField
              control={form.control}
              name="recipeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipe Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter recipe name"
                      type="text"
                      className="text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter ingredients"
                      type="text"
                      className="text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>

						<div className='flex w-1/2 justify-center items-center'>
						<FormField
							control={form.control}
							name="items2"
							render={() => (
            <FormItem className='items-center w-1/2'>
              {/* <div className="mb-4 w-44">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div> */}
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className={`flex flex-row items-start space-y-0 pl-8`}
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal pl-2">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

				<FormField
					control={form.control}
					name="items"
					render={() => (
				<FormItem className='items-center w-1/2'>
					{/* <div className="mb-4 w-44">
						<FormLabel className="text-base">Sidebar</FormLabel>
						<FormDescription>
							Select the items you want to display in the sidebar.
						</FormDescription>
					</div> */}
					{items.map((item) => (
						<FormField
							key={item.id}
							control={form.control}
							name="items"
							render={({ field }) => {
								return (
									<FormItem
										key={item.id}
										className={`flex flex-row items-start space-y-0`}
									>
										<FormControl>
											<Checkbox
												checked={field.value?.includes(item.id)}
												onCheckedChange={(checked) => {
													return checked
														? field.onChange([...field.value, item.id])
														: field.onChange(
																field.value?.filter(
																	(value) => value !== item.id
																)
															)
												}}
											/>
										</FormControl>
										<FormLabel className="font-normal pl-2">
											{item.label}
										</FormLabel>
									</FormItem>
								)
							}}
						/>
					))}
					<FormMessage />
				</FormItem>
			)}
		/>
						</div>
            </div>

            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions</FormLabel>
                  <FormControl>
                    <Textarea
										placeholder="Enter instructions"
										className="text-black"
										{...field}
										/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-indigo-800 p-2" type="submit">
              Create Recipe
            </Button>
          </form>
        </div>
      </Form>
    </div>
  );
};

