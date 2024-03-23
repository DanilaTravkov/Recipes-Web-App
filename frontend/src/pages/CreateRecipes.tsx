import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthProvider';
import { tokenInterface } from "@/types/authTypes";
import { AccessDenied } from "./AccessDenied";

export const CreateRecipes = () => {

  const { token } = useContext(AuthContext);

  const items = [
    {
      id: "cheese",
      label: "Cheese",
    },
    {
      id: "tomatoes",
      label: "Tomatoes",
    },
    {
      id: "flour",
      label: "Flour",
    },
    {
      id: "eggs",
      label: "Eggs",
    },
    {
      id: "onions",
      label: "Onions",
    },
    {
      id: "chiken",
      label: "Chiken",
    }
  ] as const;

  const createRecipeSchema = z.object({
    recipeName: z.string().min(2).max(50),
    ingredients: z.string().min(5),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    instructions: z.string().min(10),
  });

  const context: tokenInterface = useContext(AuthContext);

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

  return context.token ? (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="flex flex-col space-y-6 bg-dark-1 p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="mb-4 text-3xl font-bold text-center">Create Recipe</p>
        <Link className="absolute top-0 left-0 mt-2 ml-2 text-sm text-gray-700" to="/">
          Return to the main page
        </Link>

        <Form {...form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    {...field}
                    className="w-full px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none focus:border-indigo-600"
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
                    {...field}
                    className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:border-indigo-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            {/* <FormLabel>Sidebar Items</FormLabel> */}
            <div className="grid grid-cols-3 gap-4">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) =>
                          checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(field.value?.filter((value) => value !== item.id))
                        }
                      />
                      <FormLabel className="ml-2">{item.label}</FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage name="items" />
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
                    {...field}
                    className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:border-indigo-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
            Create Recipe
          </Button>
        </Form>
      </div>
    </div>
  ) : <AccessDenied />;
};