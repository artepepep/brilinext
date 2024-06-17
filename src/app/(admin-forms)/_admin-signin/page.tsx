import {AdminSignin} from "@/adminModules";
import {Blob} from "@/shared/components";

export default function Page () {
  return (
    <main className={"relative overflow-hidden"}>
      <AdminSignin />
      <Blob small={false} styles={"bottom-[-650px] left-1/2 transform -translate-x-1/2"} />
    </main>
  )
}