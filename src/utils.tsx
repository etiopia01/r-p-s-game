
export default function evaluate({pick1,pick2}:{pick1:string, pick2:string}) {
    if(pick1 === pick2) {
        return "It's a draw"
    }
    else if (pick1==="rock" && pick2==="scissors") {
        
        return "You win"
    }
    else if (pick1==="rock" && pick2==="paper") {
        
        return "You lose"
    }
    else if (pick1==="paper" && pick2==="scissors") {
        
        return "You lose"
    }
    else if (pick1==="paper" && pick2==="rock") {
        
        return "You win"
    }
    else if (pick1==="scissors" && pick2==="rock") {
       
        return "You lose"
    }
    else if (pick1==="scissors" && pick2==="paper") {
        
        return "You win"
    }
    return ""
}