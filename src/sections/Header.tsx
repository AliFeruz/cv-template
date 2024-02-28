

const Header = () => {
  return (
    <div className="flex-col w-full px-4 py-10">
       <div className="flex-col flex justify-center items-center w-full mt-4">
            <img src="/assets/profileimg.jpeg" alt="profile" className="w-[200px] h-[250px]
             object-cover opacity-90 rounded-xl" />
            <h1 className="text-xl text-cyan-600 font-bold mt-6">ALI FERUZ</h1>
            <h1 className=" text-cyan-500 font-semibold uppercase mt-2">Junior Full Stack Web Developer</h1>
        </div>
      <div className="text-center mt-6">
        <h1 className="text-xl text-center underline underline-offset-8 font-semibold">
         TECH SKILL'S
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2  py-3 w-full">
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img src="/assets/bxl-html5.svg" alt="html5" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="px-2 text-cyan-500 font-semibold">HTML5</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img src="/assets/bxl-css3.svg" alt="css3" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="px-2 text-cyan-500 font-semibold">CSS3</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img
            src="/assets/bxl-javascript.svg"
            alt="javascript"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="px-2 text-cyan-500 font-semibold">JavaScript</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img
            src="/assets/bxl-typescript.svg"
            alt="typescript"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="px-2 text-cyan-500 font-semibold">TypeScript</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img src="/assets/bxl-react.svg" alt="react" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="px-2 text-cyan-500 font-semibold">React</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img
            src="/assets/bxl-nodejs.svg"
            alt="nodejs"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="px-1 text-cyan-500 font-semibold">NodeJS</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img
            src="/assets/bxl-tailwind-css.svg"
            alt="tailwind-css"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="text-cyan-500 font-semibold">Tailwind</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img
            src="/assets/bxl-mongodb.svg"
            alt="mongodb"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="text-cyan-500 font-semibold">MongoDB</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img src="/assets/bxl-git.svg" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="px-3 text-cyan-500 font-semibold">Git</h1>
            <p className="px-3 text-sm font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img src="/assets/next-js.svg" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="px-2 text-cyan-500 font-semibold">NextJS</h1>
            <p className="px-2 text-sm font-semibold">Advanced</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img src="/assets/graphql-icon.svg" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-cyan-500 font-semibold">GraphQL</h1>
            <p className="px-2 text-sm font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex border border-cyan-500 rounded-xl p-1
        justify-between px-10 items-center mt-1">
          <img src="/assets/github.png" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="px-2 text-cyan-500 font-semibold">Github</h1>
            <p className="px-2 text-sm font-semibold">Basic</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-xl text-center underline underline-offset-8 font-semibold">
          LANGUAGE SKILL'S
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4  mt-2 py-4 w-full">
        <div className="flex border border-cyan-500
        rounded-xl p-1 px-5 items-center mt-1">
          <h1 className="ml-2 p-1 text-teal-700 font-semibold">
            English
          </h1>
          <p className="text-sm ml-2 p-1 uppercase font-semibold">Proficient</p>
        </div>
        <div className="flex border border-cyan-500
        rounded-xl p-1 items-center px-5 mt-2">
          <h1 className="ml-2 p-1 text-teal-700 font-semibold">
            Russian
          </h1>
          <p className="text-sm ml-2 p-1 uppercase font-semibold">Native</p>
        </div>
        <div className="flex border border-cyan-500
        rounded-xl p-1 items-center px-5 mt-2">
          <h1 className="ml-2 p-1 text-teal-700 font-semibold">
            German
          </h1>
          <p className="text-sm ml-2 p-1 uppercase font-semibold">Beginner</p>
        </div>
        <div className="flex border border-cyan-500
        rounded-xl p-1 items-center px-5 mt-2">
          <h1 className="ml-2 p-1 text-teal-700 font-semibold">
            Uzbek
          </h1>
          <p className="text-sm ml-2 p-1 uppercase font-semibold">Native</p>
        </div>
        <div className="flex border border-cyan-500
        rounded-xl p-1 items-center px-5 mt-2">
          <h1 className="ml-2 p-1 text-teal-700 font-semibold">
            Arabic
          </h1>
          <p className="text-sm ml-2 p-1 uppercase font-semibold">Advanced</p>
        </div>
        <div className="flex border border-cyan-500
        rounded-xl p-1 items-center px-5 mt-2">
          <h1 className="ml-2 p-1 text-teal-700 font-semibold">
            Persian
          </h1>
          <p className="text-sm p-1 uppercase font-semibold">Speaking</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-xl text-center underline underline-offset-8 font-semibold">
          SOFT SKILL'S
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4  mt-2 py-4 w-full">
      <div className="flex border border-cyan-400 justify-center items-center
        rounded-xl p-2 mt-1">
        <h1 className="text-sm  text-center uppercase font-semibold">Creative problem solver</h1>
        </div>
        <div className="flex border border-cyan-400 justify-center items-center
        rounded-xl p-2 mt-1">
        <h1 className="text-sm  text-center uppercase font-semibold">Thoughtful decision maker</h1>
        </div>
      <div className="flex border border-cyan-400 justify-center items-center
        rounded-xl p-2 mt-1">
        <h1 className="text-sm  text-center uppercase font-semibold">Motivated self-learner</h1>
        </div>
      <div className="flex border border-cyan-400 justify-center items-center
        rounded-xl p-2 mt-1">
        <h1 className="text-sm  text-center uppercase font-semibold">Logical thinker</h1>
        </div>
      
      <div className="flex border border-cyan-400 justify-center items-center
        rounded-xl p-2 mt-1">
        <h1 className="text-sm  text-center uppercase font-semibold">Detail-oriented</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
