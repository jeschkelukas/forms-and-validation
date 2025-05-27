import { ErrorMessage, Field, Form, Formik } from "formik"
import {
  email,
  minLength,
  minValue,
  nonEmpty,
  number,
  object,
  pipe,
  safeParse,
  string,
  type InferOutput,
} from "valibot"

import { Label } from "@/components/ui/label.tsx"

const EmailSchema = pipe(
  string(),
  nonEmpty("Please enter your email."),
  email("The email address is badly formatted."),
)

const PasswordSchema = pipe(
  string(),
  nonEmpty("Please enter your password."),
  minLength(8, "Your password must have 8 characters or more."),
)

const AgeSchema = pipe(
  number(),
  minValue(18, "You must be at least 18 years old."),
)

const UserSchema = object({
  email: EmailSchema,
  password: PasswordSchema,
  age: AgeSchema,
})

type User = InferOutput<typeof UserSchema>

export const FormikForm = ({
  onSubmit,
}: {
  onSubmit: (user: User) => void
}) => (
  <Formik
    initialValues={{ email: "", password: "", age: 18 }}
    validateOnBlur={true}
    validateOnChange={false}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values)
      resetForm()
    }}
  >
    <Form className="flex flex-col gap-4">
      <div>
        <Label htmlFor={"email"}>Email</Label>
        <Field
          name="email"
          className="w-full rounded border p-2"
          placeholder="example@email.com"
          validate={(value: User["email"]) =>
            safeParse(EmailSchema, value).issues?.shift()?.message
          }
        />
        <ErrorMessage
          name="email"
          component="div"
          className="mt-1 text-sm text-red-500"
        />
      </div>

      <div>
        <Label htmlFor={"password"}>Password</Label>
        <Field
          name="password"
          type="password"
          placeholder="********"
          className="w-full rounded border p-2"
          validate={(value: User["password"]) =>
            safeParse(PasswordSchema, value).issues?.shift()?.message
          }
        />
        <ErrorMessage
          name="password"
          component="div"
          className="mt-1 text-sm text-red-500"
        />
      </div>

      <div>
        <Label htmlFor={"age"}>Age</Label>
        <Field
          name="age"
          type="number"
          placeholder="18+"
          className="w-full rounded border p-2"
          validate={(value: User["age"]) =>
            safeParse(AgeSchema, value).issues?.shift()?.message
          }
        />
        <ErrorMessage
          name="age"
          component="div"
          className="mt-1 text-sm text-red-500"
        />
      </div>

      <button type="submit">Submit</button>
    </Form>
  </Formik>
)
