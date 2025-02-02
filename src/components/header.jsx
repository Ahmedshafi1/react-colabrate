import { NavLink } from "react-router-dom"

const Header =() =>{
    return <div>
        <div >
        <div className="flex gap-10 justify-between px-5 py-3 bg-amber-400" >
            <div className="flex gap-3">
                <div >
                    <button className="bg-red-500 w-10 text-2xl rounded-lg text-white " ><i class="fa-solid fa-car"></i></button>
                </div>
                <NavLink to="/"><h1 className="font-semibold">Le wango</h1></NavLink>

            </div>
            <ul className="flex gap-10">
                <li>Courses <i class="fa-solid fa-chevron-down"></i></li>
                <li>Locations <i class="fa-solid fa-chevron-down"></i></li>
                <li>Why Lo wagno</li>
               <NavLink to="/events"><li> Events</li></NavLink> 
                <li> Enters <i class="fa-solid fa-chevron-down"></i></li>
            </ul>

            <div>
                <button className="bg-indigo-700 px-3 text-white font-semibold rounded-lg py-1" >Apply</button>
            </div>

        </div>

     </div>
    </div>
}
export default Header