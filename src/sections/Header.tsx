import { PhoneIcon, HomeIcon, EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <div className="flex justify-between w-4/5 items-center p-10">
        <div className="flex-col items-center ml-10 justify-center gap-4">
            <img src="/assets/profile.jpeg" alt="profile" className="w-[300px] h-[300px] border-2 border-pink-400 rounded-full" />
            <h1 className="text-xl font-bold mt-4 text-center">ALI FERUZ</h1>
        </div>
        <div className="flex-col w-2/5">
            <h1 className="text-4xl text-start underline underline-offset-8 font-semibold">CONTACT</h1>
            <div className="flex items-center w-auto gap-4 mt-4">
                <HomeIcon className="w-4 h-4 text-pink-500"/>
                <p className="text-xl border-l p-2 border-pink-500 font-semibold">
                 Berlin</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <PhoneIcon className="w-4 h-4 text-pink-500"/>
                <p className="text-xl border-l p-2 border-pink-500 font-semibold">
                 +49 000 0000000
                </p>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <EnvelopeIcon className="w-4 h-4 text-pink-500"/>
                <p className="text-xl border-l p-2 border-pink-500 font-semibold">
                 aliferuzcode@gmail.com
                </p>
            </div>
            <div className="flex items-center justify-end gap-4 mt-4">
                <GlobeAltIcon className="w-4 h-4 text-pink-500"/>
                <p className="text-xl border-l p-2 border-pink-500 font-semibold">
                https://ali-feruz.vercel.app/
                </p>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <img src="/assets/linkedin.png" alt="linkedin" className="w-4 h-4 text-pink-500"/>
                <p className="text-xl border-l p-2 border-pink-500 font-semibold">
                https://www.linkedin.com/in/ali-feruz-5840ab164/
                </p>
            </div>
            <div className="flex items-center gap-4 mt-4">
            <img src="/assets/github.png" alt="linkedin" className="w-4 h-4 text-pink-500"/>
                <p className="text-xl border-l p-2 border-pink-500 font-semibold">
                https://github.com/AliFeruz
                </p>
            </div>
        
        </div>
      
    </div>
  )
}

export default Header
