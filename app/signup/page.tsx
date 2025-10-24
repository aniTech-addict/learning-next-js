"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

export default function SignupPage() {
    const [user,setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const onSignup = async () => {

    };
    
    return (
        <div className="text-center">
            Signup
        </div>
    );
}