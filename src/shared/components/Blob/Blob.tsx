import BigBlob from "../../images/BigBlob.png";
import SmallBlob from "../../images/SmallBLob.png";
import Image from "next/image";

export default function Blob ({ styles, small }: { styles?: string, small: boolean }) {
  return (
    <div className={`absolute z-[-1] top-[-200px] right-[-200px] rounded-[50%] blur-3xl ${styles}`}>
      {small ? (
        <Image className="animate-spin-slow rounded-[50%]" style={{
          borderRadius: "50%",
        }}    
        src={SmallBlob} alt="Small Blob" />
      ) : (
        <Image className="animate-spin-slow" style={{
          borderRadius: "50%", 
        }} src={BigBlob} alt="Big Blob" priority={true}  />
      )
      }
    </div>
  )
}