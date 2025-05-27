import { useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { FormikForm } from "./forms/FormikForm"
import { RHFForm } from "./forms/RHFForm"
import { TanStackForm } from "./forms/TanStackForm"

import "./App.css"

export type User = {
  email: string
  password: string
  age: number
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user])
  }

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-12 text-center text-4xl font-bold">
        React ecosystem: Forms and validation
      </h1>

      <section className="flex flex-col gap-10">
        <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm">
          <CardHeader>
            <CardTitle>
              <h2 className="text-center text-xl font-bold">
                React Hook Form + Zod
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RHFForm onSubmit={addUser} />
          </CardContent>
        </Card>

        <Separator className="my-[20px]" />

        <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm">
          <CardHeader>
            <CardTitle>
              <h2 className="text-center text-xl font-bold">
                Formik + Valibot
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormikForm onSubmit={addUser} />
          </CardContent>
        </Card>

        <Separator className="my-[20px]" />

        <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm">
          <CardHeader>
            <CardTitle>
              <h2 className="text-center text-xl font-bold">
                TanStack Form + Zod
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TanStackForm onSubmit={addUser} />
          </CardContent>
        </Card>
      </section>

      <Separator className="my-[20px]" />

      <section>
        <h2 className="mb-4 text-center text-2xl font-semibold">Users</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Email</TableHead>
                <TableHead className="text-center">Password</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow key={idx}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  )
}

export default App
