export default function Navbar() {
  return (
    <div className="w-full h-[10%] sticky">
      <div className="w-full h-[40%] bg-[#FF8000] mt-5 absolute"></div>
      <div className="w-full h-[80%] absolute mt-2 flex justify-between">
        <div className="h-full w-[65%] bg-white rounded-full drop-shadow-lg ml-28 flex">
          <div className="font-pacifico w-[15%] h-full flex items-center justify-center text-3xl -mt-1">
            Yammi
          </div>
          <div className="h-full w-[80%] flex justify-around items-center">
            <div className="uppercase text-lg">Recipes</div>
            <div className="uppercase text-lg">Popular</div>
            <div className="uppercase text-lg">Meat</div>
            <div className="uppercase text-lg">healthy</div>
            <div className="uppercase text-lg">holidays</div>
            <div className="uppercase text-lg">sharefood</div>
          </div>
        </div>
        <div className="h-full w-[25%] bg-white rounded-l-full drop-shadow-lg flex justify-evenly items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Z"
            />
          </svg>
          <div className="w-[40%] h-[70%] bg-[#FF8000] rounded-full drop-shadow-md text-white flex items-center justify-center">
            Нэвтрэх
          </div>
        </div>
      </div>
    </div>
  );
}
