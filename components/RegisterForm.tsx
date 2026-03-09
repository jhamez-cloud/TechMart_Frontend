import React from 'react'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterForm() {
  return (
    <div className='w-full h-160 rounded-md p-10 bg-white mt-4 flex space-x-8'>
      <div className='w-1/2 h-full px-16 flex items-center'>
        <img src="/images/account_form.png" alt="" />
      </div>
        <div className='w-1/2 h-full flex flex-col space-y-8 pr-12'>
            <div>
                <h1 className='text-3xl font-bold text-[#1ABA1A]'>Register</h1>
                <p className='text-sm font-normal text-gray-400'>TO JOIN US</p>
            </div>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-name">Your Name</FieldLabel>
                    <Input id="fieldgroup-name" placeholder="John Doe" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email Address</FieldLabel>
                    <Input id="fieldgroup-email" placeholder="example@email.com" required/>
                    <FieldDescription>
                        We&apos;ll send updates to this address.
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
                    <Input
                    id="fieldgroup-password"
                    type="password"
                    placeholder="Enter your password"
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-password">Confirm Password</FieldLabel>
                    <Input
                    id="fieldgroup-password"
                    type="password"
                    placeholder="Confirm your password"
                    />
                </Field>
                <Field orientation="horizontal">
                    <Button type="submit" className='bg-[#1ABA1A]'>REGISTER</Button>
                </Field>
            </FieldGroup>
        </div>
    </div>
  )
}
