import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import Link from "next/link";

export default function Contacts ({ withIcons }: { withIcons: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {withIcons ? (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <SharedSpriteSVG name="mail" />
            <p>brilinxoft@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <SharedSpriteSVG name="phone" />
          </div>
        </div>
        ): 
      (
        <div className="flex flex-col gap-4">
          <p>brilinxoft@gmail.com</p>
        </div>
      )}
      <div className="flex items-center gap-6">
        <Link
          aria-label="Brilinxoft Clutch"
          target="_blank"
          href={"https://clutch.co/profile/brilinxoft"}>
          <SharedSpriteSVG name="clutch" />
        </Link>
        <Link 
          aria-label="Brilinxoft LinkedIn"
          target="_blank" 
          href={"https://www.linkedin.com/company/brilinxoft/"}>
            <SharedSpriteSVG name="linkedIn" />
        </Link>
        <Link 
          aria-label="Brilinxoft Instagram" 
          target="_blank"
          href={"https://www.instagram.com/brilinxoft/"}>
            <SharedSpriteSVG name="instagram" />
        </Link>
        <Link 
          aria-label="Brilinxoft Facebook"
          target="_blank" 
          href={"https://www.facebook.com/share/VeNtTo1dhu8Pz5mo/"}>
            <SharedSpriteSVG name="facebook" />
        </Link>          
      </div>
    </div>
  )
}