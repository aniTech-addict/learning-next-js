"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import Input from "../../components/Input";
import Link from "next/link";

export default function LoginPage() {
    const [user,setUser] = useState({
        username: "",
        password: ""
    });
    const onLogin = async () => {
        
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-4 px-4 gap-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Login Page
            </h1>
            <hr className="w-full border-gray-300 mb-6" />
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="username" className="text-sm font-medium">Username:</label>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={(field, value) => setUser({...user, [field]: value})}
                />
            </div>

            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="password" className="text-sm font-medium">Password:</label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={(field, value) => setUser({...user, [field]: value})}
                />
            </div>
            
            <button
                onClick={onLogin}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
                Login
            </button>
            
            <div>
                    Don't have an account?
                <Link href="/signup" className="text-sm text-blue-500 hover:underline mt-2">
                   {" "} Signup
                </Link>
            </div>
        </div>
    );
}