// import { Type } from "@sinclair/typebox"
// import { Value } from "@sinclair/typebox/value"
// import { useForm} from "@tanstack/react-form"
//
// import type { User } from "../App.tsx"
// import type {Static} from "@sinclair/typebox";
//
// const schema = Type.Object({
//     email: Type.String({ format: "email" }),
//     password: Type.String({ minLength: 8 }),
// })
//
// type FormType = Static<typeof schema>
//
// export function TanStackFormExample({
//                                         onSubmit,
//                                     }: {
//     onSubmit: (user: User) => void
// }) {
//     const form = useForm<FormType, any, any, any, any, any, any, any, any, any>({
//         defaultValues: {
//             email: "",
//             password: "",
//         },
//         onSubmit: async ({ value }) => {
//             if (Value.Check(schema, value)) {
//                 onSubmit(value)
//                 form.reset()
//             } else {
//                 alert("Validation failed")
//             }
//         },
//     })
//
//     // ✨ Musíš vytvořit pole přes useField()
//     const emailField = form.useField({ name: "email" })
//     const passwordField = form.useField({ name: "password" })
//
//     return (
//         <form onSubmit={form.handleSubmit} className="flex flex-col gap-4 max-w-md mb-8">
//             <input
//                 {...emailField.getInputProps()}
//                 placeholder="Email"
//                 className="border p-2 rounded"
//             />
//             {emailField.state.meta.error && (
//                 <p className="text-red-500 text-sm">{emailField.state.meta.error}</p>
//             )}
//
//             <input
//                 {...passwordField.getInputProps()}
//                 placeholder="Password"
//                 type="password"
//                 className="border p-2 rounded"
//             />
//             {passwordField.state.meta.error && (
//                 <p className="text-red-500 text-sm">{passwordField.state.meta.error}</p>
//             )}
//
//             <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded">
//                 Submit
//             </button>
//         </form>
//     )
// }
