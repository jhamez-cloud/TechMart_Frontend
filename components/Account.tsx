'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import useSWRMutation from 'swr/mutation'
import { updateprofile } from '@/lib/api'

export default function Accounts() {
  const [activeTab, setActiveTab] = useState('account')
  const { currentUser, loading } = useAuth();
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState("Mark Cole");

  const buttons = [
    { id: 'account', label: 'Account info' },
    { id: 'orders', label: 'My order' },
    { id: 'address', label: 'My address' },
    { id: 'password', label: 'Change password' },
  ]

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL
  const {trigger,isMutating} = useSWRMutation<any,any,string,FormData>(`${Django_Url}/api/v1/profiles/update-by-uid/`,updateprofile)

  const handleUpdate = async () => {
    const formData = new FormData();

    formData.append("firebase_uid", currentUser.uid);

    if (phone) formData.append("phone", phone);
    if (image) formData.append("profile_pic", image);
    if (email) formData.append("email", email);
    if (name) formData.append("user_name", name);

    await trigger(formData);
  };

  return (
    <div className="w-full mt-4 flex flex-col md:flex-row gap-6 md:gap-10">

      {/* SIDEBAR */}
      <div className="w-full md:w-72 bg-white rounded-xl p-6 flex flex-col space-y-6 shadow-sm">

        {/* USER INFO */}
        <div className="flex flex-col items-center gap-4">
          <label className="w-24 h-24 rounded-xl bg-gray-200 flex items-center justify-center cursor-pointer">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="text-gray-400 text-sm">Avatar</span>
            )}

            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </label>
          <div className="text-center">
            <h2 className="font-semibold text-lg">Mark Cole</h2>
            <p className="text-sm text-gray-500">{currentUser.email}</p>
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex flex-col gap-3">
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
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 bg-white rounded-xl p-6 md:p-10 shadow-sm">

        {activeTab === 'account' && (
          <div className="space-y-6">

            <h1 className="text-2xl font-semibold">Account Info</h1>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue="Mark"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={currentUser.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                defaultValue="+1 0231 4554 452"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            <button 
             className="mt-6 w-full md:w-auto bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition"
             onClick={handleUpdate}
             disabled={isMutating}
            >
              {isMutating ? "Updating..." : "Update"} 
            </button>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="text-gray-500">Orders section</div> //chore:fetch from orders
        )}
        {activeTab === 'address' && (
          <div className="text-gray-500">Address section</div> //chore:fetch from users
        )}
        {activeTab === 'password' && (
          <div className="text-gray-500">Password section</div> //chore:change with firebase
        )}

      </div>
    </div>
  )
}