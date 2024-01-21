import { GlobeAltIcon } from "@heroicons/react/24/outline"



const Info = () => {
  return (
    <div className="flex-col w-full p-8">
        <div className="flex-col flex justify-center items-center w-full p-4 mt-4">
            <img src="/assets/profile.jpeg" alt="profile" className="w-[300px] h-[330px] shadow shadow-teal-500 object-cover ml-14 rounded-lg" />
            <h1 className="text-3xl text-teal-500 font-bold mt-6">ALI FERUZ</h1>
            <h1 className="text-2xl text-teal-600 font-bold mt-2">Full Stack Web Developer</h1>
        </div>
        <div className="flex-col mt-4 bg-teal-100 border border-teal-500 rounded-xl p-4 w-full">
            <p className="text-xl p-2 font-semibold">Enthusiastic Junior Full Stack Developer with a strong foundation in web development technologies. Proficient in HTML, CSS, and JavaScript, with hands-on experience in building responsive and dynamic web applications using React and Node.js. Well-versed in the modern development workflow, utilizing Git/Github for version control.</p>
            <p className="text-xl p-2 font-semibold">Specialized in crafting sleek and intuitive user interfaces with proficiency in styling frameworks like Tailwind CSS. Experienced in database management, with a solid understanding of MongoDB and Firebase, ensuring seamless integration of data-driven functionalities.</p>
            <p className="text-xl p-2 font-semibold">Eager to contribute my technical skills and passion for innovation to a dynamic development team at [Company/Organization]. Excited about the opportunity to apply and expand my expertise in full-stack development to drive impactful solutions and deliver exceptional user experiences.</p>
        </div>
        <div className="text-center mt-4">
        <h1 className="text-xl text-center underline underline-offset-8 font-semibold">
          EXPERIENCE & PROJECTS
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="flex-col bg-teal-200 border border-teal-500 rounded-xl p-1 items-center gap-4 mt-2">
            <h1>Project Name</h1>
            <p>Description</p>
            <div className="flex">
            <a
            href=" https://github.com/AliFeruz"
            className="flex-col bg-teal-200 border border-teal-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <img src="/assets/github.png" alt="linkedin" className="w-6 h-6" />
            <p className="text-xl ml-4 px-3 text-teal-700 font-semibold">Github</p>
          </a>
          <a
            href="https://ali-feruz.vercel.app/"
            className="flex-col bg-teal-200 border border-teal-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <GlobeAltIcon className="w-6 h-6" />
            <p className="text-xl ml-4 px-3 text-teal-700 font-semibold">Ali Feruz</p>
          </a>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Info