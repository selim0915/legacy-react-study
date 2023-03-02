export default function CustomDialog(props){
    return(
        <div style={{backgroundColor: "green"}}>
            <h1>{props.title}</h1>
            <h5>{props.description}</h5>
        </div>
    )
}