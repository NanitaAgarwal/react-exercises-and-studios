export default function HobbyLinks(){
    let hobbyLinks=["https://robinhood.com/","https://us.shein.com/"];
    return(
        <div>
            <h2>My Hobbies</h2>
            <a href={hobbyLinks[0]}>Robinhood<br></br></a>
            <a href={hobbyLinks[1]}>Shein</a>
        </div>
    );
}