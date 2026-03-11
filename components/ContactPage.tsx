'use client'

import { Facebook, Twitter, Instagram, Youtube, Pin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex">

      <div className="w-full grid grid-cols-3 gap-8 bg-white rounded-xl p-8 mt-4">

        {/* LEFT FORM */}
        <div className="col-span-2 space-y-4">

          <h1 className="font-bold">
            READY TO WORK WITH US
          </h1>

          <p className="text-gray-500 text-sm">
            Contact us for all your questions and opinions
          </p>

          {/* NAME ROW */}
          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col gap-2">
              <label className="text-sm">
                First Name <span className="text-red-500">*</span>
              </label>
              <input className="border rounded-md px-3 py-2"/>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input className="border rounded-md px-3 py-2"/>
            </div>

          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input className="border rounded-md px-3 py-2"/>
          </div>

          {/* PHONE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Phone Number <span className="text-gray-400">(Optional)</span>
            </label>
            <input className="border rounded-md px-3 py-2"/>
          </div>

          {/* COUNTRY */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Country / Region <span className="text-red-500">*</span>
            </label>

            <select className="border rounded-md px-3 py-2">
              <option>United States (US)</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Germany</option>
            </select>
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Subject <span className="text-gray-400">(Optional)</span>
            </label>
            <input className="border rounded-md px-3 py-2"/>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">Message</label>
            <textarea
              rows={5}
              placeholder="Note about your order, e.g. special note for delivery"
              className="border rounded-md px-3 py-2"
            />
          </div>

          {/* CHECKBOX */}
          <div className="flex items-start gap-2 text-sm text-gray-600">

            <input type="checkbox" className="mt-1"/>

            <p>
              I want to receive news and updates once in a while. By submitting,
              I’m agreed to the{' '}
              <span className="text-green-600 underline">
                Terms & Conditions
              </span>
            </p>

          </div>

          {/* BUTTON */}
          <button className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition">
            SEND MESSAGE
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 flex flex-col justify-end">

          {/* OFFICE CARD */}
          <div className="bg-gray-100 p-6 rounded-xl space-y-8 ">

            <div>
              <p className="text-gray-500 uppercase">
                UNITED STATES (HEAD QUATER)
              </p>

              <p className="text-sm mt-2">
                152 Thatcher Road St. Mahattan, 10463, US
              </p>

              <p className="text-sm mt-1">
                (+025) 3886 25 16
              </p>

              <p className="text-green-600 text-sm mt-1">
                hello@swattechmart.com
              </p>
            </div>

            <div>
              <p className="text-gray-500 uppercase">
                UNITED KINGDOM (BRANCH)
              </p>

              <p className="text-sm mt-2">
                12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
              </p>

              <p className="text-sm mt-1">
                (+718) 895-5350
              </p>

              <p className="text-green-600 text-sm mt-1">
                contact@swattechmart.co.uk
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3 pt-2">

              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Twitter size={16}/>
              </div>

              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Facebook size={16}/>
              </div>

              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Instagram size={16}/>
              </div>

              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Youtube size={16}/>
              </div>

              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Pin size={16}/>
              </div>

            </div>

          </div>

          {/* IMAGE */}
          <img
            src="/images/my_account.png"
            className="rounded-xl object-cover w-full h-72"
          />

        </div>

      </div>

    </div>
  )
}