import {
  PhoneIcon,
  HomeIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";


const Info = () => {
  return (
    <div className="flex-col w-full p-4">
      <div className="text-center mt-4">
        <h1 className="text-xl text-center underline underline-offset-8 font-semibold">
          CONTACT INFO
        </h1>
      </div>
      <div className="flex-col mt-6 border border-cyan-500 rounded-xl p-4">
        <div className="flex justify-between">
        <div className="flex items-center ml-6 w-auto mt-2">
          <HomeIcon className="w-6 h-6 text-cyan-400 " />
          <p className="tex ml-4 px-3">Berlin</p>
        </div>
        <div className="flex items-center ml-6 mt-2">
          <PhoneIcon className="w-6 h-6 text-cyan-400 " />
          <p className="text-xl ml-4 px-3">+49 162 921 6040</p>
        </div>
        </div>
       <div className="flex justify-between">
       <div className="flex items-center ml-6 mt-2">
          <EnvelopeIcon className="w-6 h-6 text-cyan-400 " />
          <p className="text-xl ml-4 px-3">
            aliferuzcode@gmail.com
          </p>
        </div>
       <a href="https://codingferuz.vercel.app/" className="flex mt-2 justify-start">
        <GlobeAltIcon className="w-6 h-6 text-cyan-400 " />
        <p className="text-xl ml-4 px-3">Ali Feruz</p>
        </a>
       </div>
        <div className="flex justify-between">
        <a href="https://www.linkedin.com/in/aliferuz" className="flex items-center ml-6 mt-2">
        <img src="/assets/linkedin.png" alt="linkedin" className="w-6 h-6 bg-cyan-400 rounded-full"/>
        <p className="text-xl ml-4 px-3">LinkedIn</p>
        </a>
        <a href=" https://github.com/AliFeruz" className="flex mt-2">
        <img src="/assets/github.png" alt="linkedin" className="w-6 h-6 bg-cyan-400 rounded-full" />
        <p className="text-xl ml-4 px-3">Github</p>
        </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-xl text-center uppercase underline underline-offset-8 font-semibold">
        About
        </h1>
      </div>
        <div className="flex-col mt-6
        border border-cyan-500 rounded-xl p-4 w-full">
        <p className="text-sm p-2">Passionate Junior Full Stack Web Developer 
        eager to contribute skills and knowledge to dynamic projects. Proficient in HTML, 
        CSS, and JavaScript, with hands-on experience in building responsive and engaging 
        web applications using modern frameworks like Next.js and React. Excited about 
        leveraging MERN stack technologies for backend development.</p>
        <p className="text-sm p-2">Specialized in crafting visually appealing 
        and user-friendly interfaces, with a keen eye for design details. Enthusiastic user 
        of Tailwind CSS to create modern and responsive UI components. Experienced in database 
        management, with a solid understanding of MongoDB and Firebase, ensuring seamless integration 
        of data-driven functionalities.</p>
        <p className="text-sm p-2">As a Junior Developer, I have successfully 
        completed various projects showcasing my creativity and problem-solving abilities. 
        Now, I am eager to bring my skills to a collaborative team environment, contribute to 
        meaningful projects, and continue my growth as a developer.</p>
        </div>
        <div className="text-center mt-6">
        <h1 className="text-xl text-center underline underline-offset-8 font-semibold">
          EDUCATION
        </h1>
      </div>
      <div className="flex-col mt-6 border border-cyan-500 rounded-xl p-4 w-full">
        <h2 className="text-xl text-center text-cyan-400 font-semibold">
        Code Academy Berlin <br/> Berlin,
        September 2023 - February 2024
        </h2>
        <p className="p-1 mt-2 text-sm text-center">
        Web Development Bootcamp (full-time on-site) | Front-end + Back-end
        Completed an 840-hour intensive course focusing on practical, 
        project-based work following the agile / SCRUM framework within the cohort, 
        including code reviews, spikes, presentations.
        </p>
      </div>
        <div className="text-center mt-6">
        <h1 className="text-xl text-center underline underline-offset-8 font-semibold">
          EXPERIENCE & PROJECTS
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2 py-4">
        <div className="flex-col border border-cyan-500
        rounded-xl p-1 items-center gap-4 mt-2">
            <h1 className="text-center mt-1 text-xl text-cyan-500">RickAndMorty</h1>
            <p className="p-2 text-sm">This project made to fix new knowledge about NextJS. 
            During this project I'm fetching data using REST API and GraphQL. 
            I'm generating my pages SSR, CSR and SSG</p>
            <div className="flex">
            <div className="flex justify-between gap-3 w-full p-1 items-center">
            <a href="https://github.com/AliFeruz/rickandmorty"
            className="border border-cyan-500 
            rounded-xl p-1 items-center mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Github</p>
            </a>
            <a href="https://rickandmorty-roan.vercel.app/"
            className="border border-cyan-500 
            rounded-xl p-1 items-center mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Demo</p>
            </a>
            </div>
            </div>
        </div>
        <div className="flex-col border border-cyan-500 
        rounded-xl p-1 items-center gap-4 mt-2">
            <h1 className="text-center mt-1 text-xl text-cyan-500">CRUD Notes</h1>
            <p className="p-2 text-sm">MERN Notes app. Create | Read | Update | Delete
            To use CRUD Notes app first you need to create account, then you will get features 
            to create, update and delete Notes.</p>
            <div className="flex">
            <div className="flex justify-between gap-3 w-full p-1 items-center">
            <a href="https://github.com/AliFeruz/mern_notes"
            className="border border-cyan-500 
            rounded-xl p-1 items-center mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Github</p>
            </a>
            <a href="https://crudnotes.vercel.app/"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Demo</p>
            </a>
            </div>
            </div>
        </div>
        <div className="flex-col border border-cyan-500 
        rounded-xl p-1 items-center gap-4 mt-1">
            <h1 className="text-center mt-1 text-xl text-cyan-500">Rakhudu</h1>
            <p className="p-2 text-sm"> To build this React app, I used my knowledge of Typescript, 
            Tailwind CSS and more</p>
            <div className="flex">
            <div className="flex justify-between gap-3 w-full p-1 items-center">
            <a href="https://github.com/AliFeruz/Rakhudu"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Github</p>
            </a>
            <a href="https://marggraff.vercel.app/"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Demo</p>
            </a>
            </div>
            </div>
        </div>
        <div className="flex-col border border-cyan-500
        rounded-xl p-1 items-center gap-4 mt-1">
            <h1 className="text-center mt-1 text-xl text-cyan-500">Pokedex</h1>
            <p className="p-2 text-sm">This project builded on Vanilla HTML, CSS and JS<br/>
            Fetching data from PokeApi restapi</p>
            <div className="flex">
            <div className="flex justify-between gap-3 w-full p-1 items-center">
            <a href="https://github.com/AliFeruz/pokedex"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1" >
            <p className=" text-cyan-500 text-sm font-semibold">Github</p>
            </a>
            <a href="https://pokedex1gen.vercel.app/index.html"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Demo</p>
            </a>
            </div>
            </div>
        </div>
        <div className="flex-col border border-cyan-500
        rounded-xl p-1 items-center gap-4 mt-1">
            <h1 className="text-center mt-1 text-xl text-cyan-500">ECOMMERCE-ADMIN</h1>
            <p className="p-2 text-sm">During this project I evaluate my knowledge on NextJS 
            and used techs such as NEXTAuth, NEXTApi, TailwindCSS and more</p>
            <div className="flex">
            <div className="flex justify-between gap-3 w-full p-1 items-center">
            <a href="https://github.com/AliFeruz/ecommerce-admin"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1" >
            <p className=" text-cyan-500 text-sm font-semibold">Github</p>
            </a>
            {/* <a href="https://pokedex1gen.vercel.app/index.html"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Demo</p>
            </a> */}
            </div>
            </div>
        </div>
        <div className="flex-col border border-cyan-500
        rounded-xl p-1 items-center gap-4 mt-1">
            <h1 className="text-center mt-1 text-xl text-cyan-500">COMME LE ROI</h1>
            <p className="p-2 text-sm">This is admin dashbord for cattery COMME LE ROI.
            techs: NextJS, NextAuth, TailwindCSS, MongoDB, Mongoose</p>
            <div className="flex">
            <div className="flex justify-between gap-3 w-full p-1 items-center">
            <a href="https://github.com/AliFeruz/comme_le_roi"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1" >
            <p className=" text-cyan-500 text-sm font-semibold">Github</p>
            </a>
            {/* <a href="https://pokedex1gen.vercel.app/index.html"
            className="border border-cyan-500 
            rounded-xl p-1 items-center gap-2 mt-1">
            <p className=" text-cyan-500 text-sm font-semibold">Demo</p>
            </a> */}
            </div>
            </div>
        </div>       
      </div>
      <div className="gap-4 justify-end p-4 flex">
        <p className="mt-2 text-xl text-slate-600">More projects you can see on my</p>
        <a href=" https://github.com/AliFeruz" className="flex items-center mt-2">
        <p className="text-xl ml-2 text-cyan-400 font-semibold">Github</p>
        </a>
        </div>
        
    </div>
  )
}

export default Info