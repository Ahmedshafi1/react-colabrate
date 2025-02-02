
import img1 from "../assets/one.webp";
import Footer from "../components/footer";
import Header from "../components/header";

const Next = () => {
  return (
    <>
    <Header />


    <div className="flex flex-col lg:flex-row bg-orange-100 max-w-[1130px] h-auto md:h-[400px] mx-auto mt-5 rounded-lg p-5">
        {/* Left Side */}
        <div className="w-full lg:w-[50%] p-5">
            <h2 className="text-2xl text-red-600">Live Events</h2>
            <h1 className="font-bold text-3xl md:text-4xl pt-5">
                Explore Our Live events, talks and free workshops
            </h1>
            <p className="pt-5 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis blanditiis suscipit. Corporis, voluptatibus placeat!
            </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[50%] flex justify-center">
            <img className="w-full max-w-[500px] h-auto md:h-[350px] rounded-lg" src={img1} alt="Live Events" />
        </div>
    </div>




      <div className="mt-7 flex flex-wrap justify-between gap-6">
        {/* Filters Section */}
        <div className="w-full md:w-[30%] bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Topic</h3>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select</option>
            </select>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Type</h3>
            <div className="space-y-2">
              {["All", "Online", "On-site", "Replay"].map((type, index) => (
                <label key={index} className="flex items-center">
                  <input type="radio" name="type" className="form-radio" defaultChecked={index === 0} />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Language</h3>
            <div className="space-y-2">
              {["All", "English", "French", "Español - LA", "Spanish", "German"].map((lang, index) => (
                <label key={index} className="flex items-center">
                  <input type="radio" name="language" className="form-radio" defaultChecked={index === 0} />
                  <span className="ml-2">{lang}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="w-full md:w-[65%] bg-white">
          <h1 className="text-3xl font-semibold">Events that match your search</h1>
          <hr className="mt-7 border-gray-300" />

          <div className="mt-9">
            <h1 className="font-semibold text-2xl">Categories</h1>
            <ul className="flex flex-wrap gap-4 pt-6 px-5">
              {["All", "Workshop", "Talk", "Info session", "Demo Day"].map((category, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-600">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Events List */}
          <div className="space-y-6 mt-9">
            {[1, 2].map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-lg shadow-md p-4 w-full">
                <img className="w-full md:w-1/3 h-40 object-cover rounded-lg" src={img1} alt="Event" />
                <div className="md:ml-5 mt-3 md:mt-0 w-full">
                  <h6 className="bg-gray-200 w-max px-3 py-1 rounded-lg text-blue-600 font-semibold">Workshop</h6>
                  <h1 className="font-bold text-xl mt-2">How to finance your bootcamp with an interest-free loan</h1>
                  <h2 className="text-red-500 font-semibold mt-1">Tue, February 4 • 12:00 pm (Europe/Amsterdam Time)</h2>
                  <h6 className="mt-1">Online</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};



export default Next;
