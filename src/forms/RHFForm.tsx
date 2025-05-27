import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const emailSchema = z.object({
  email: z
    .string()
    .email("Invalid email")
    .transform((val) => val.trim().toLowerCase()),
})

const passwordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((val) => !val.includes("password"), {
      message: 'Password must not contain "password"',
    }),
})

const ageField = z.coerce
  .number()
  .pipe(z.number().min(18, "Must be at least 18").max(99, "Must be under 100"))

const userSchema = emailSchema.merge(passwordSchema).extend({
  age: ageField,
})

type User = z.infer<typeof userSchema>

export const RHFForm = ({ onSubmit }: { onSubmit: (user: User) => void }) => {
  const form = useForm<User>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
  })
  const { handleSubmit, reset, control } = form

  const submit = (data: User) => {
    onSubmit(data)
    reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={void handleSubmit(submit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="18+"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
