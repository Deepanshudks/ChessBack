import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";


export const Landing = () =>{
const navigate = useNavigate();
    return <div className=" pt-8 flex justify-center" >
       
        <div className="pt-10 max-w-screen-lg">
            
                <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
                {/* nd:grid-cols-2 */}
                    <div className="flex justify-center">
                        <img className="max-w-96 " src={"/images/chessboard.jpeg"}/>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl text-white font-bold ">
                            Play chess online with your friends
                        </h1>
                        <div className="mt-5 ">
                        <Button onClick={()=>{
                            navigate("/game")
                        }}> Play Now </Button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
}