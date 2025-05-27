import { useState } from "react"

// import { TanStackFormExample } from "./forms/TanStackForm"

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

import "./App.css"

export type User = {
  email: string
  password: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user])
  }

  return (
    <main className="mx-auto max-w-4xl space-y-10 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        React ecosystem: Forms and validation
      </h1>

      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-center text-xl font-bold">
                React Hook Form + Zod
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <RHFForm onSubmit={addUser} />
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-center text-xl font-bold">
                Formik + Valibot
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <FormikForm onSubmit={addUser} />
          </CardContent>
        </Card>

        <Separator />

        {/*<Card>
          <CardHeader>
                               <CardTitle>
                            <h2 className="text-xl font-bold text-center">
                                TanStack Form + TypeBox
                            </h2>
                        </CardTitle>
            <CardTitle className="text-xl font-bold"></CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <TanStackFormExample onSubmit={addUser} />
          </CardContent>
        </Card>*/}
      </section>

      <Separator />

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
