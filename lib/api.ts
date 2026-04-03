export const createprofile = async (url:string, {arg}:any) => {
    const res = await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(arg),
        credentials:"include"
    })

    if (!res.ok) throw new Error ("Couldn't Create User Profile")
    return res.json()
}

export const updateprofile = async (url: string, { arg }: any) => {
  const res = await fetch(url, {
    method: "PATCH",
    body: arg,
  });

  if (!res.ok) throw new Error("Update failed");
  return res.json();
};

export const createOrder = async (url: string, { arg }: any) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!res.ok) throw new Error("Order failed");
  return res.json();
};