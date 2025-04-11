"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Assuming your Shadcn UI components are here
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the validation schema using Zod
const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setSubmissionError(null); // Clear any previous errors

    if (data.password !== data.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match.",
      });
      return;
    }

    // Simulate an API call for signup
    try {
      console.log("Form data submitted:", data);
      // In a real application, you would send this data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      alert("Signup successful!");
      form.reset(); // Clear the form after successful submission
    } catch (error: any) {
      console.error("Signup failed:", error);
      setSubmissionError("Failed to create account. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-3xl shadow-2xl backdrop-filter bg-slate-200 dark:bg-emerald-500 bg-opacity-40 dark:bg-opacity-40">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </Form>

      {submissionError && (
        <div className="mt-4 text-red-500 dark:text-red-300">
          {submissionError}
        </div>
      )}
    </div>
  );
};

export default SignupForm;
