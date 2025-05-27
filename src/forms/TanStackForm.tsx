import { useForm } from "@tanstack/react-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const userSchema = z.object({
  email: z
    .string()
    .email("Invalid email")
    .transform((val) => val.trim().toLowerCase()),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((val) => !val.includes("password"), {
      message: 'Password must not contain "password"',
    }),
  age: z.number().min(18, "Must be at least 18").max(99, "Must be under 100"),
})

type User = z.infer<typeof userSchema>

export function TanStackForm({ onSubmit }: { onSubmit: (data: User) => void }) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      age: 18,
    } as User,
    validators: {
      onBlur: userSchema,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value)
    },
  })

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        e.stopPropagation()
        await form.handleSubmit()
        form.reset()
      }}
      className="flex flex-col gap-4"
    >
      <form.Field name="email">
        {(field) => (
          <div>
            <Label htmlFor={field.name}>Email</Label>
            <Input
              id={field.name}
              placeholder="example@email.com"
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {!field.state.meta.isValid && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors.map((err) => err?.message).join(", ")}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <form.Field name="password">
        {(field) => (
          <div>
            <Label htmlFor={field.name}>Password</Label>
            <Input
              id={field.name}
              type="password"
              placeholder="********"
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {!field.state.meta.isValid && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors.map((err) => err?.message).join(", ")}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <form.Field name="age">
        {(field) => (
          <div>
            <Label htmlFor={field.name}>Age</Label>
            <Input
              id={field.name}
              type="number"
              placeholder="18+"
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.valueAsNumber)}
            />
            {!field.state.meta.isValid && (
              <p className="text-sm text-red-500">
                {field.state.meta.errors.map((err) => err?.message).join(", ")}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit}
          >
            {isSubmitting ? "Submitting…" : "Submit"}
          </Button>
        )}
      />
    </form>
  )
}
