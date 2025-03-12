import LocationDateReserve from "@/components/DateReserve"

export default function Booking(){
    return(
        <main className="w-[100%] flex flex-col items-center space-y-5 text-black">
            <div className="text-xl font-medium space-y-10 ">Reserve Event Room</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Select your dates</div>
                <LocationDateReserve/>
                
            </div>

            <button name="Book Venue"className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-small">
                Book Venue
            </button>

           
        </main>
    )
}