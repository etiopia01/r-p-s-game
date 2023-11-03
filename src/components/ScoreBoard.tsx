
import { score } from "./Pick"

export default function ScoreBoard() {
    
  

   
 
    return (
        <div className="w-[600px] rounded-lg border-2 border-Header-Outline flex justify-between items-center p-6">
            <div>
              <p className="text-3xl text-white">ROCK</p>
              <p className="text-3xl text-white">PAPER</p>
              <p className="text-3xl text-white">SCISSORS</p>
            </div>
            <div className="bg-white rounded-md p-2 h-full w-32 flex flex-col justify-center items-center">
                <h4 className="text-Score-Text text-lg">SCORE</h4>
                <p className="text-Dark-Text text-5xl mr-3">{score}</p>
            </div>
        </div>
    )
}