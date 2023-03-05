import Dialog from "./Dialog";

export default function ThankDialog(){
    // return (
    //     <Dialog title={"Thanks"} description={"thank you too"} button={"close"} />
    // )
    return (
        <Dialog 
            title={<h1 style={{color: "blue"}}>thank</h1>} 
            description={"thank you too"} 
            button={<button style={{backgroundColor:"blue"}}>close</button>} 
        />
    )
}