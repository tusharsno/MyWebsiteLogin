"use client";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="mb-4">Access Denied. Please login.</p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome, {session.user?.name}
        </h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="font-semibold text-gray-700 dark:text-gray-300">Visitors</h2>
          <p className="text-2xl mt-2 text-gray-900 dark:text-white">1200</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="font-semibold text-gray-700 dark:text-gray-300">Projects</h2>
          <p className="text-2xl mt-2 text-gray-900 dark:text-white">15</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="font-semibold text-gray-700 dark:text-gray-300">Messages</h2>
          <p className="text-2xl mt-2 text-gray-900 dark:text-white">35</p>
        </div>
      </div>
    </div>
  );
}
