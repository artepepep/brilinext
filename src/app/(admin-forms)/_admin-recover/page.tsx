import {Blob} from "@/shared/components";
import {AdminRecover} from "@/adminModules";

export default function Page () {
  return (
    <main className={"relative overflow-hidden"}>
      <AdminRecover />
      <Blob small={false} styles={"bottom-[-650px] left-1/2 transform -translate-x-1/2"} />
    </main>
  )
}