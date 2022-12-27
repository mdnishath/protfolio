import React from "react";
const tecch = [
  {
    cat: "Tools",
    id: 1,
    detils: [{ icon: "images/asset/vscode.png", title: "VS Code" }],
  },
  {
    cat: "Graphic Design",
    id: 2,
    detils: [{ icon: "images/asset/Figma.png", title: "Figma" }],
  },
  {
    cat: "Front-End Frameworks",
    id: 3,
    detils: [
      { icon: "images/asset/TailwindCSS.png", title: "Tailwind CSS" },
      { icon: "images/asset/Bootstrap.png", title: "Bootstrap" },
    ],
  },
  {
    cat: "Javascript UI",
    id: 4,
    detils: [{ icon: "images/asset/React.png", title: "React JS" }],
  },
  {
    cat: "Languages",
    id: 5,
    detils: [
      { icon: "images/asset/JavaScript.jpeg", title: "JavaScript" },
      { icon: "images/asset/HTML.png", title: "HTML" },
      { icon: "images/asset/CSS.png", title: "CSS" },
    ],
  },
  {
    cat: "Package Manager",
    id: 6,
    detils: [
      { icon: "images/asset/npm.png", title: "npm" },
      { icon: "images/asset/Yarn.jpg", title: "Yarn" },
    ],
  },
  {
    cat: "Databases",
    id: 7,
    detils: [
      {
        icon: "images/asset/FirebaseRealtimeDatabase.png",
        title: "Firebase Realtime Database",
      },
    ],
  },
  {
    cat: "State Management",
    id: 8,
    detils: [
      {
        icon: "images/asset/Redux.png",
        title: "Redux",
      },
    ],
  },
  {
    cat: "User Management",
    id: 9,
    detils: [
      {
        icon: "images/asset/FirebaseAuthentication.jpg",
        title: "Firebase Authentication",
      },
    ],
  },
];

const Skills = () => {
  // console.log(tecch.map((item) => console.log(item)));

  return (
    <div className="mx-auto mt-4 max-w-container rounded-lg border bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <h3 className="font-pop text-lg font-semibold dark:text-slate-300">
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-between md:gap-4">
        {tecch.map((item, index) => (
          <div
            key={index}
            className="lastStyle w-full border-b dark:border-b-slate-700 sm:w-[30%]"
          >
            <h3 className="my-5 font-pop text-sm font-semibold text-secondery dark:text-slate-400">
              {item.cat}
            </h3>
            {item.detils.map((info, index) => (
              <div key={index} className="my-4 flex items-center gap-x-2">
                <div className="h-[18px] w-[18px]">
                  <img
                    className="h-full w-full"
                    src={info.icon}
                    alt={info.title}
                  />
                </div>

                <h4 className="font-pop text-[13px] text-secondery dark:text-slate-400">
                  {info.title}
                </h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
