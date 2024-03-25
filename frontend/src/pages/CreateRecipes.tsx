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
import axios from "axios";

export const CreateRecipes = () => {

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
      id: "chicken",
      label: "Chicken",
    }
  ] as const;

  const createRecipeSchema = z.object({
    name: z.string().min(2).max(50),
    ingredients: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    descr: z.string().min(10),
  });

  const form = useForm<z.infer<typeof createRecipeSchema>>({
    resolver: zodResolver(createRecipeSchema),
    defaultValues: {
      name: "",
      ingredients: [],
      descr: "",
    },
  });

  const context: tokenInterface = useContext(AuthContext);

  async function onSubmit(values: z.infer<typeof createRecipeSchema>) {
    try {
      console.log("Attempt to create a dish");
      const tokensObject = JSON.parse(context.tokens);
      console.log(tokensObject.accessToken);
      const response = await axios.post("http://localhost:3000/v1/createDish", values, {
        headers: {
          Authorization: `Bearer ${tokensObject.accessToken}`
        }
      })
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return context.tokens ? (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="flex flex-col space-y-6 bg-dark-1 p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="mb-4 text-3xl font-bold text-center">Create Recipe</p>
        <Link className="absolute top-0 left-0 mt-2 ml-2 text-sm text-gray-700" to="/">
          Return to the main page
        </Link>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> 
          
          <FormField
            control={form.control}
            name="name"
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
                  name="ingredients"
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
            <FormMessage />
          </div>

          <FormField
            control={form.control}
            name="descr"
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

          </form>      
        </Form>
      </div>
    </div>
  ) : <AccessDenied />;
};