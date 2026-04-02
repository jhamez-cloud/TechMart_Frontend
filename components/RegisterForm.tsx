'use client'
import React, { useState } from "react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const isMatch = password === confirmPassword;

  const handleSignUp = async (e:any) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        // show error
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      // User signed up successfully, handle redirection or state update
      console.log('Signed up successfully!');
      setError(null);
    } catch (error: any) {
      setError(error.message);
      console.error('Error signing up:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('Google Sign-In successful!');
      // Handle redirection or state update
    } catch (error:any) {
      console.error('Error with Google Sign-In:', error.message);
    }
  };

  return (
    <div className="w-full bg-white rounded-md mt-4 p-6 md:p-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">

      {/* Left Image */}
      <div className="w-full md:w-1/2 h-60 md:h-full flex justify-center items-center px-0 md:px-16">
        <img
          src="/images/account_form.png"
          alt="Account Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-8 px-4 md:px-12">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1ABA1A]">
            Register
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-400">
            TO JOIN US
          </p>
        </div>

        <FieldGroup className="space-y-4 md:space-y-6">
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Your Name</FieldLabel>
            <Input id="fieldgroup-name" placeholder="John Doe" 
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email Address</FieldLabel>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Enter Password</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputGroupAddon
                align="inline-end"
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </InputGroupAddon>
            </InputGroup>
          </Field>
          {!isMatch && confirmPassword && (
            <p className="text-red-500 text-sm">Passwords do not match</p>
          )}
          {/* Confirm Password */}
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <InputGroupAddon
                align="inline-end"
                className="cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <Eye /> : <EyeOff />}
              </InputGroupAddon>
            </InputGroup>
          </Field>

          {/* Submit */}
          <Field orientation="vertical" className="space-y-2 md:space-y-0 md:flex md:flex-row md:items-center md:space-x-4">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit" className="w-full md:w-auto bg-[#1ABA1A] text-white" onClick={handleSignUp}>
              REGISTER
            </Button>
          </Field>

          <FieldDescription className="text-center md:text-left text-sm md:text-base">
            ALREADY HAVE AN ACCOUNT?{" "}
            <a href="/pages/login" className="text-[#1ABA1A] font-semibold">
              LOGIN
            </a>
          </FieldDescription>


          {/* Divider */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Button */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
            onClick={handleGoogleSignIn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.91 2.3 30.39 0 24 0 14.61 0 6.48 5.48 2.44 13.44l8.02 6.23C12.52 13.3 17.79 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.1 24.5c0-1.6-.14-3.13-.4-4.6H24v8.7h12.4c-.54 2.9-2.18 5.35-4.65 7l7.2 5.6c4.2-3.87 6.6-9.57 6.6-16.7z"/>
              <path fill="#FBBC05" d="M10.46 28.67A14.5 14.5 0 019.5 24c0-1.63.28-3.2.77-4.67l-8.02-6.23A23.96 23.96 0 000 24c0 3.8.9 7.38 2.44 10.56l8.02-6.23z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.91-2.14 15.88-5.82l-7.2-5.6c-2 1.34-4.56 2.12-8.68 2.12-6.21 0-11.48-3.8-13.54-9.17l-8.02 6.23C6.48 42.52 14.61 48 24 48z"/>
            </svg>
            Continue with Google
          </Button>
        </FieldGroup>
      </div>
    </div>
  );
}