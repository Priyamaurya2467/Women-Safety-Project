import { useLocation } from "react-router-dom";
import LiveMap from "./Map/LiveMapping";
import SafetyStatus from "./Journey/SafetyStatus";
function JourneyPage() {

    const { state } = useLocation();

    const destination = state?.destination;

    console.log(destination);

    return (
        
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto p-6">

                <h1 className="text-3xl font-bold mb-6">
                    Safe Journey
                </h1>

                <div className="grid grid-cols-12 gap-6">

                    {/* Left Side */}
                    <div className="col-span-4 bg-white rounded-xl p-6 shadow">

                        <h2 className="text-xl font-semibold mb-4">
                            Journey Details
                        </h2>

                        <p>
                            <strong>Destination:</strong>
                        </p>

                        <p className="text-gray-600">
                            {destination}
                        </p>

                    </div>

                    {/* Right Side */}

                    <div className="col-span-8 bg-white rounded-xl shadow h-[650px]">

                        <LiveMap destination={destination}/>

                    </div>

                </div>

            </div>

            <SafetyStatus safetyScore={92} status="Journey Active" distanceLeft={5.4} eta={16}/>

            {/* if(distanceFromRoute >200){

                alert("You have deviated from your planned route.");

                } */}
        </div>
    );
}

export default JourneyPage;