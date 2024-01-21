import {
  PhoneIcon,
  HomeIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex-col w-full px-4 py-10">
      <div className="text-center mt-4">
        <h1 className="text-2xl text-center underline underline-offset-8 font-semibold">
          CONTACT INFO
        </h1>
      </div>
      <div className="flex-col mt-4 bg-teal-100 border border-orange-500 rounded-xl p-4">
        <div className="flex items-center w-auto mt-2">
          <HomeIcon className="w-6 h-6" />
          <p className="text-xl ml-4 px-3 text-orange-400 font-semibold">Berlin</p>
        </div>
        <div className="flex items-center mt-2">
          <PhoneIcon className="w-6 h-6" />
          <p className="text-xl ml-4 px-3 text-orange-400 font-semibold">+49 162 921 6040</p>
        </div>
        <div className="flex items-center mt-2">
          <EnvelopeIcon className="w-6 h-6" />
          <p className="text-xl ml-4 px-3 text-orange-400 font-semibold">
            aliferuzcode@gmail.com
          </p>
        </div>
        <div>
          <a
            href="https://ali-feruz.vercel.app/"
            className="flex mt-2 items-center"
          >
            <GlobeAltIcon className="w-6 h-6" />
            <p className="text-xl ml-4 px-3 text-orange-400 font-semibold">Ali Feruz</p>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-feruz-5840ab164/"
            className="flex items-center mt-2"
          >
            <img
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-6 h-6"
            />
            <p className="text-xl ml-4 px-3 text-orange-400 font-semibold">LinkedIn</p>
          </a>
          <a
            href=" https://github.com/AliFeruz"
            className="flex items-center mt-2"
          >
            <img src="/assets/github.png" alt="linkedin" className="w-6 h-6" />
            <p className="text-xl ml-4 px-3 text-orange-400 font-semibold">Github</p>
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-2xl text-center underline underline-offset-8 font-semibold">
          EDUCATION
        </h1>
      </div>
      <div className="flex-col mt-4 bg-teal-100 border border-orange-500 rounded-xl p-4 w-full">
        <h2 className="text-xl text-center text-orange-400 font-semibold">
          CODE ACADEMY BERLIN (Bootcamp)
        </h2>
        <p className="p-1 mt-2 text-center">09.2023 - 03.2024</p>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-2xl text-center underline underline-offset-8 font-semibold">
          SKILL'S
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2  py-4 w-full">
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img src="/assets/bxl-html5.svg" alt="html5" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">HTML5</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img src="/assets/bxl-css3.svg" alt="css3" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">CSS3</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img
            src="/assets/bxl-javascript.svg"
            alt="javascript"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">JS</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img
            src="/assets/bxl-typescript.svg"
            alt="typescript"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">TS</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img src="/assets/bxl-react.svg" alt="react" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">React</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img
            src="/assets/bxl-nodejs.svg"
            alt="nodejs"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="text-xl px-1 text-teal-800 font-semibold">NodeJS</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img
            src="/assets/bxl-tailwind-css.svg"
            alt="tailwind-css"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="text-xl text-teal-800 font-semibold">Tailwind</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img
            src="/assets/bxl-mongodb.svg"
            alt="mongodb"
            className="w-10 h-10"
          />
          <div className="flex-col">
            <h1 className="text-xl text-teal-800 font-semibold">Mongo</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img src="/assets/bxl-git.svg" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">Git</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img src="/assets/next-js.svg" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">NextJS</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img src="/assets/graphql-icon.svg" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-xl text-teal-800 font-semibold">GraphQL</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <img src="/assets/github.png" alt="git" className="w-10 h-10" />
          <div className="flex-col">
            <h1 className="text-xl px-2 text-teal-800 font-semibold">Github</h1>
            <p className="px-2 font-semibold">Basic</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-2xl text-center underline underline-offset-8 font-semibold">
          LANGUAGE SKILL'S
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4  mt-2 py-4 w-full">
        <div className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <h1 className="text-2xl ml-2 p-1 text-teal-700 font-semibold">
            English
          </h1>
          <p className="text-xl ml-2 p-1 font-semibold">Proficient</p>
        </div>
        <div className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <h1 className="text-2xl ml-2 p-1 text-teal-700 font-semibold">
            Russian
          </h1>
          <p className="text-xl ml-2 p-1 font-semibold">Native</p>
        </div>
        <div className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <h1 className="text-2xl ml-2 p-1 text-teal-700 font-semibold">
            German
          </h1>
          <p className="text-xl ml-2 p-1 font-semibold">Beginner</p>
        </div>
        <div className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <h1 className="text-2xl ml-2 p-1 text-teal-700 font-semibold">
            Uzbek
          </h1>
          <p className="text-xl ml-2 p-1 font-semibold">Native</p>
        </div>
        <div className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <h1 className="text-2xl ml-2 p-1 text-teal-700 font-semibold">
            Arabic
          </h1>
          <p className="text-xl ml-2 p-1 font-semibold">Advanced</p>
        </div>
        <div className="flex-col bg-teal-100 border border-orange-500 rounded-xl p-1 items-center gap-2 mt-2">
          <h1 className="text-2xl ml-2 p-1 text-teal-700 font-semibold">
            Persian
          </h1>
          <p className="text-xl ml-2 p-1 font-semibold">Speaking</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
