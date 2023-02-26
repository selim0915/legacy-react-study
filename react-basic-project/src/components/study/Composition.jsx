export const Dialog = (props) => {
    return (
        <div style={{backgroudColor: "red"}}>
            <h1>Dialog</h1>
            <p>{props.name}</p>
            <p>{props.child}</p>
        </div>
    )
}

export const CustomDialog = (props) => {
    return (
        <div style={{backgroudColor: "red"}}>
            <h1>CustomDialog</h1>
            <p>{props.name}</p>
            <p>{props.child}</p>
            <Dialog name={props.name} child={props.child}/>
        </div>
    )
}

export default function Composition() {
    return (
        <>
            <CustomDialog name="srwoo" child="child hoho" />
        </>
    )
}