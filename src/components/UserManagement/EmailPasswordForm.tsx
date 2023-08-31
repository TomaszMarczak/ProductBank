import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../_ui/form";
import { Input } from "../_ui/input";
import { Button } from "../_ui/button";
import { Icons } from "../_icons/Icons";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/router";
import Link from "next/link";

export const emailPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

interface EmailPasswordFormProps {
  onSubmit: (values: z.infer<typeof emailPasswordSchema>) => void;
  buttonText?: string;
}

const EmailPasswordForm = ({
  onSubmit,
  buttonText,
}: EmailPasswordFormProps) => {
  const form = useForm<z.infer<typeof emailPasswordSchema>>({
    resolver: zodResolver(emailPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
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
        <Button type="submit" className="w-full">
          {buttonText || "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default EmailPasswordForm;
