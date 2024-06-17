"use client"

import {useState} from "react";
import {GradientButton} from "@/shared/components";
import Card from "@/adminModules/adminAdmins/components/Card";
import AddAdminModal from "@/adminModules/adminAdmins/components/AddAdminModal";
import DeleteAdminModal from "@/adminModules/adminAdmins/components/DeleteAdminModal";

export default function AdminAdmins () {
  const [viewedAdmin, setViewedAdmin] = useState<number>();
  const [addAdminModalDisplay, setAddAdminModalDisplay] = useState("hidden");
  const [deleteAdminModalDisplay, setDeleteAdminModalDisplay] = useState("hidden");

  const superAdmin = true;

  const admins = [
    {
      name: "Some name",
      status: "Super Admin",
      registrationDate: "01.02.2024",
      phone: "+380 96 237 99 99",
      email: "mail@gmail.com"
    },
    {
      name: "One more",
      status: "Super Admin",
      registrationDate: "01.03.2024",
      phone: "+380 96 999 14 88",
      email: "mail@gmail.com"
    },
    {
      name: "One more olehovich",
      status: "Super Admin",
      registrationDate: "27.02.2024",
      phone: "+380 96 999 54 27",
      email: "mail@gmail.com"
    },
    {
      name: "Oleksandr Omelchenko",
      status: "Super Admin",
      registrationDate: "01.02.2023",
      phone: "+380 96 888 99 99",
      email: "mail@gmail.com"
    },
    {
      name: "Opacha",
      status: "Super Admin",
      registrationDate: "01.02.2022",
      phone: "+380 96 888 88 88",
      email: "mail@gmail.com"
    },
  ]

  return (
    <div>
      <div className={"flex items-center justify-between mb-8"}>
        <h2 className={"text-[32px] text-[#3892F5]"}>Admins</h2>
        {superAdmin && (
          <GradientButton
            onClick={() => setAddAdminModalDisplay("block")}
            text={"add admin"}
            uppercase={true}
            type={"button"}
          />
        )}
      </div>
      <div className={"grid grid-cols-5 grid-flow-col gap-4"}>
        {admins.map((admin, counter) => (
          <Card
            onClick={(event) => setViewedAdmin(Number(event.currentTarget.id))}
            id={String(counter)}
            name={admin.name}
            status={admin.status}
            displayBorder={counter === viewedAdmin && true}
            key={counter}
          />
        ))}
      </div>
      <div>
        {viewedAdmin !== undefined && (<h2 className={"text-[24px] mt-10 mb-8"}>Info</h2>)}
        {viewedAdmin !== undefined && (
          <div className={"flex flex-col gap-6"}>
            <div className={"flex gap-10 items-center"}>
              <div className={"flex flex-col gap-4"}>
                <h3 className={"text-[#3892F5]"}>Registration date:</h3>
                <p className={"text-[#3892F5]"}>Phone:</p>
                <p className={"text-[#3892F5]"}>Email:</p>
              </div>
              <div className={"flex flex-col gap-4"}>
                <h3>{admins[viewedAdmin].registrationDate}</h3>
                <p>{admins[viewedAdmin].phone}</p>
                <p>{admins[viewedAdmin].email}</p>
              </div>
            </div>
            {superAdmin && (
              <GradientButton
                onClick={() => setDeleteAdminModalDisplay("block")}
                text={"delete"}
                uppercase={true}
                type={"button"}
              />
            )}
          </div>
        )}
      </div>
      <AddAdminModal
        modalDisplay={addAdminModalDisplay}
        closeClick={() => setAddAdminModalDisplay("hidden")}
      />
      <DeleteAdminModal
        modalDisplay={deleteAdminModalDisplay}
        closeClick={() => setDeleteAdminModalDisplay("hidden")}
      />
    </div>
  )
}