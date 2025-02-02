

import imgOne from "../assets/wep.webp"
import imgTwo from "../assets/waa.webp"
import imgThree from "../assets/wee.webp"
import imgFour from "../assets/wrr.webp"

const Test = ()=>{
    return <>
    


   
    <div class="bg-purple-900 text-white text-center p-4 font-semibold">
        Top tech companies hire our graduates
    </div>
    
    

    
    
    <div class="text-center my-10">
        <h1 class="text-4xl font-bold">Join a career-changing bootcamp</h1>
        <p class="text-gray-600 mt-2">Our transformative training courses have helped thousands launch new careers in tech.</p>
        <div class="flex justify-center gap-4 text-red-600 mt-4 font-medium">
            <span>&#10004; 200-400 hours</span>
            <span>&#10004; Live classes</span>
            <span>&#10004; Flexible - 2 to 7 months</span>
            <span>&#10004; On site or online</span>
        </div>
    </div>
    
   
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-4 shadow-lg rounded-lg text-center">
           <img className="rounded-lg" src={imgOne} alt="" />
            <h2 class="font-bold text-xl mt-4">Web Development</h2>
            <p class="text-gray-600">Build modern software & AI apps.</p>
            <button class="mt-3 bg-purple-600 text-white py-2 px-4 rounded">Learn Web Development</button>
        </div>
        <div class="bg-white p-4 shadow-lg rounded-lg text-center">
            <img className="rounded-lg" src={imgTwo} alt="" />
            <h2 class="font-bold text-xl mt-4">Data Science & AI</h2>
            <p class="text-gray-600">Build Machine learning & AI models.</p>
            <button class="mt-3 bg-purple-600 text-white py-2 px-4 rounded">Learn Data Science & AI</button>
        </div>
        <div class="bg-white p-4 shadow-lg rounded-lg text-center">
           <img className="rounded-lg" src={imgThree} alt="" />
            <h2 class="font-bold text-xl mt-4">Data Engineering</h2>
            <p class="text-gray-600">Design efficient data pipelines.</p>
            <button class="mt-3 bg-purple-600 text-white py-2 px-4 rounded">Learn Data Engineering</button>
        </div>
        <div class="bg-white p-4 shadow-lg rounded-lg text-center">
           <img className="rounded-lg" src={imgFour} alt="" />
            <h2 class="font-bold text-xl mt-4">Data Analytics</h2>
            <p class="text-gray-600">Turn your data into insights.</p>
            <button class="mt-3 bg-purple-600 text-white py-2 px-4 rounded">Learn Data Analytics</button>
        </div>
    </div>
    
   
    <div class="text-center mt-10 text-gray-700">
        <p>You can start for <strong>FREE!</strong> <a href="#" class="text-purple-600 underline">Join a live webinar</a></p>
    </div>
    </>


  
}

export default Test