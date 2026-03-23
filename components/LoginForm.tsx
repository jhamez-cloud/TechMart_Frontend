'use client'
import React,{useState} from "react";
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
import { Eye,EyeOff } from "lucide-react";

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
      <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-10 px-4 md:px-12">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1ABA1A]">
            Welcome Back
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-400">
            LOGIN TO CONTINUE
          </p>
        </div>

        <FieldGroup className="space-y-4 md:space-y-6">
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email Address</FieldLabel>
            <Input
              id="fieldgroup-email"
              placeholder="example@email.com"
              className="w-full"
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <InputGroup>
              <InputGroupInput
              id="fieldgroup-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full"
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

          <Field orientation="vertical" className="space-y-2 md:space-y-0 md:flex md:flex-row md:items-center md:space-x-4">
            <Button type="reset" variant="outline" className="w-full md:w-auto">
              Reset
            </Button>
            <Button type="submit" className="w-full md:w-auto bg-[#1ABA1A] text-white">
              Submit
            </Button>
          </Field>

          <FieldDescription className="text-center md:text-left text-sm md:text-base">
            DON&apos;T HAVE AN ACCOUNT?{" "}
            <a href="/pages/register" className="text-[#1ABA1A] font-semibold">
              REGISTER
            </a>
          </FieldDescription>
        </FieldGroup>
      </div>
    </div>
  );
}