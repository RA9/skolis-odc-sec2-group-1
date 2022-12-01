import React from "react";

export default function Home() {
    return (
        <div id="intro" class="bg-[#D4DAE4] h-auto my-6 py-8 rounded-lg border-4">
          <div id="curriculum-vitae" class="prose lg:prose-xl px-2">
                <h2 class="text-center text-gray-800 text-4xl capitalize font-medium">Curriculum Vitae</h2>
        </div>
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://liberiaentrepreneursnetwork.com/wp-content/uploads/2022/06/IMG_20220608_115127-1024x1024.jpg" alt="Joseph" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Joseph S. K. Pambu Jr.</h1>
                <p class="text-center text-lg text-gray-800">
                 Entrepreneur, Founder, CEO & Software Developer    
                </p>
                <div className="p-6 max-w-full mx-auto">
                  <ul className="flex justify-center items-center gap-4">
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "about" && 'bg-[#FF8F56]' }`}>
                      <a href="#about" onClick={handleActive} id="about" className="font-roboto text-xl">About</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]' }`}>
                      <a href="#work" onClick={handleActive} id="work" className="font-roboto  text-xl">Work</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]' }`}>
                      <a href="#education" onClick={handleActive} id="education" className="font-roboto  text-xl">Education</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]' }`}>
                      <a href="#hobbies" onClick={handleActive} id="hobbies" className="font-roboto  text-xl">Hobbies</a>
                    </li>
                    <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "skills" && 'bg-[#FF8F56]' }`}>
                      <a href="skills" onClick={handleActive} id="skills" className="font-roboto  text-xl">Skills</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    )
}