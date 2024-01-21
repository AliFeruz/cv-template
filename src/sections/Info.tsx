


const Info = () => {
  return (
    <div className="flex-col w-full p-4">
      
        <div className="flex-col flex justify-center items-center w-full p-4 mt-4">
            <img src="/assets/profile.jpeg" alt="profile" className="w-[350px] h-[360px] shadow-lg shadow-orange-500 object-cover opacity-80 ml-14 rounded-xl" />
            <h1 className="text-3xl text-orange-500 font-bold mt-6">ALI FERUZ</h1>
            <h1 className="text-2xl text-teal-700 font-bold mt-2">Junior Full Stack Web Developer</h1>
        </div>
        <div className="flex-col mt-4 bg-teal-100 border border-orange-500 rounded-xl p-4 w-full">
            <p className="text-xl p-2 font-semibold">Enthusiastic Junior Full Stack Developer with a strong foundation in web development technologies. Proficient in HTML, CSS, and JavaScript, with hands-on experience in building responsive and dynamic web applications using React and Node.js. Well-versed in the modern development workflow, utilizing Git/Github for version control.</p>
            <p className="text-xl p-2 font-semibold">Specialized in crafting sleek and intuitive user interfaces with proficiency in styling frameworks like Tailwind CSS. Experienced in database management, with a solid understanding of MongoDB and Firebase, ensuring seamless integration of data-driven functionalities.</p>
            <p className="text-xl p-2 font-semibold">Eager to contribute my technical skills and passion for innovation to a dynamic development team at [Company/Organization]. Excited about the opportunity to apply and expand my expertise in full-stack development to drive impactful solutions and deliver exceptional user experiences.</p>
        </div>
        <div className="text-center mt-6">
        <h1 className="text-2xl text-center underline underline-offset-8 font-semibold">
          EXPERIENCE & PROJECTS
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2 py-4">
        <div className="flex-col border border-orange-500 rounded-xl p-1 items-center gap-4 mt-2">
            <h1 className="text-center mt-1 text-xl text-orange-500">RickAndMorty</h1>
            <p className="p-2">This project made to fix new knowledge about NextJS. <br/> During this project I'm fetching data using REST API and GraphQL. I'm generating my pages SSR, CSR and SSG</p>
            <div className="flex">
              <div className="flex justify-between gap-3 w-full p-1 items-center">
              <a
            href="https://github.com/AliFeruz/rickandmorty"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Github Repo</p>
          </a>
          <a
            href="https://rickandmorty-roan.vercel.app/"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Live Demo</p>
          </a>
              </div>
            </div>
        </div>
        <div className="flex-col border border-orange-500 rounded-xl p-1 items-center gap-4 mt-2">
            <h1 className="text-center mt-1 text-xl text-orange-500">CRUD Notes</h1>
            <p className="p-2">MERN Notes app. Create | Read | Update | Delete <br/>
            To use CRUD Notes app first you need to create account, then you will get features to create, update and delete Notes.</p>
            <div className="flex">
              <div className="flex justify-between gap-3 w-full p-1 items-center">
              <a
            href="https://github.com/AliFeruz/mern_notes"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Github Repo</p>
          </a>
          <a
            href="https://crudnotes.vercel.app/"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Live Demo</p>
          </a>
              </div>
            </div>
        </div>
        <div className="flex-col border border-orange-500 rounded-xl p-1 items-center gap-4 mt-2">
            <h1 className="text-center mt-1 text-xl text-orange-500">Rakhudu</h1>
            <p className="p-2"> To build this React app, I used my knowledge of Typescript, Tailwind CSS and more</p>
            <div className="flex">
              <div className="flex justify-between gap-3 w-full p-1 items-center">
              <a
            href="https://github.com/AliFeruz/Rakhudu"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Github Repo</p>
          </a>
          <a
            href="https://marggraff.vercel.app/"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Live Demo</p>
          </a>
              </div>
            </div>
        </div>
        <div className="flex-col border border-orange-500 rounded-xl p-1 items-center gap-4 mt-2">
            <h1 className="text-center mt-1 text-xl text-orange-500">Pokedex</h1>
            <p className="p-2">This project builded on Vanilla HTML, CSS and JS<br/>
            Fetching data from PokeApi restapi</p>
            <div className="flex">
              <div className="flex justify-between gap-3 w-full p-1 items-center">
              <a
            href="https://github.com/AliFeruz/pokedex"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Github Repo</p>
          </a>
          <a
            href="https://pokedex1gen.vercel.app/index.html"
            className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2"
          >
            <p className=" text-orange-400 font-semibold">Live Demo</p>
          </a>
              </div>
            </div>
        </div>
      </div>
      <div className="gap-4 justify-end p-4 flex">
        <p className="mt-2 text-xl">More projects you can see on my</p>
        <a href=" https://github.com/AliFeruz" className="flex items-center mt-2">
        <p className="text-xl ml-2 text-orange-400 font-semibold">Github</p>
          </a>
        </div>
        
    </div>
  )
}

export default Info