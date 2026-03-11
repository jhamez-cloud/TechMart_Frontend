'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Accounts() {

  const [activeTab, setActiveTab] = useState('account')

  const buttons = [
    { id: 'account', label: 'Account info' },
    { id: 'orders', label: 'My order' },
    { id: 'address', label: 'My address' },
    { id: 'password', label: 'Change password' },
  ]

  return (
    <div className="w-full min-h-120 mt-4 flex gap-10">

      {/* SIDEBAR */}
      <div className="w-72 bg-white rounded-xl p-6 flex flex-col space-y-4 gap-6 shadow-sm">

        <div className="flex flex-col items-center gap-4 space-y-2">
          <div className="w-50 h-50 rounded-xl bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Avatar</span>
          </div>

          <div className="text-center">
            <h2 className="font-semibold text-lg">Mark Cole</h2>
            <p className="text-sm text-gray-500">swoo@gmail.com</p>
          </div>
        </div>

        {/* BUTTON GROUP */}
        <div className="flex flex-col gap-3 space-y-2">

          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id)}
              className={`flex justify-between items-center px-4 py-3 rounded-lg text-sm font-medium transition
              
              ${activeTab === btn.id
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 border hover:bg-gray-50'
              }`}
            >
              {btn.label}
              <ArrowRight size={16}/>
            </button>
          ))}

        </div>

      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 bg-white rounded-xl p-10 shadow-sm">

        {activeTab === 'account' && (
          <div className="space-y-6">

            <h1 className="text-2xl font-semibold">Account Info</h1>

            <div className="grid grid-cols-2 gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue="Mark"
                  className="border rounded-lg px-3 py-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue="Cole"
                  className="border rounded-lg px-3 py-2"
                />
              </div>

            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue="swoo@gmail.com"
                className="border rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                defaultValue="+1 0231 4554 452"
                className="border rounded-lg px-3 py-2"
              />
            </div>

            <button className="mt-6 bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              SAVE
            </button>

          </div>
        )}

        {activeTab === 'orders' && (
          <div className="text-gray-500">Orders section</div>
        )}

        {activeTab === 'address' && (
          <div className="text-gray-500">Address section</div>
        )}

        {activeTab === 'password' && (
          <div className="text-gray-500">Password section</div>
        )}

      </div>

    </div>
  )
}