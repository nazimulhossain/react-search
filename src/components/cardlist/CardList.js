import Card from "../card/Card";
import './CardList.css';
const CardList =({monster})=>{
    if(monster.length===0){
        return(
            <h2>Not Found</h2>
        )
        }
    else {
        return (
        <div className="CardList">
         {monster.map((robot)=>{
                return (
                    <div key={robot.id}>
                        <Card id={robot.id} name={robot.name} email={robot.email} />
                    </div>
                )                
          
       })}    
        </div>
      
       
    )
    }
    
}

export default CardList;