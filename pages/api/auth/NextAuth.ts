// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import clientPromise from "@/lib/mongodb";

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) return null;

//         const client = await clientPromise;
//         const db = client.db("portfolio");

//         const user = await db
//           .collection("admins")
//           .findOne({ username: credentials.username });

//         if (user && user.password === credentials.password) {
//           return { id: user._id.toString(), name: user.username };
//         }

//         return null;
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/admin/login",
//   },
// });


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("portfolio");
        const user = await db.collection("users").findOne({ email: credentials?.email });
        if (user && credentials?.password === credentials?.password) {
          return { id: user._id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
};

export default NextAuth(authOptions);
