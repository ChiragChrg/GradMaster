import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./zod"
import { ZodError } from "zod"
import * as bcrypt from "bcrypt"
import UserModel from "@/models/UserModel"
import { connectDB } from "./database"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@email.com" },
                password: { label: "Password", type: "password", placeholder: "Enter Password" },
            },
            authorize: async (credentials) => {
                try {
                    let user = null
                    const { email, password } = await signInSchema.parseAsync(credentials)

                    await connectDB()
                    const userExists = await UserModel.findOne({ email: email, password: { $exists: true, $ne: null } })
                    const matchPassword = await bcrypt.compare(password, userExists?.password)
                    if (!userExists || !matchPassword) throw new Error("Invalid Email or Password")

                    return userExists
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null
                    }
                }
            }
        })
    ],
})