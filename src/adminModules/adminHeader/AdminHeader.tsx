import {Container, Logotype} from "@/shared/components";
import AdminName from "./components/AdminName";

export default function AdminHeader() {
  return (
    <>
      <header className={"w-full py-4 bg-[#FAFAFA]"}>
        <div className={"px-10"}>
          <div className={"flex items-center justify-between w-full"}>
            <Logotype/>
            <AdminName name={"Name"}/>
          </div>
        </div>
      </header>
    </>
  )
}