import CustomDialog from "./CustomDialog";
import Dialog from "./Dialog";

export default function WelcomeDialog(){
    // return (
    //     <Dialog>
    //         <div>welcome</div>
    //         <div>welcomeDialog</div>
    //     </Dialog>
    // )
    return (
        <CustomDialog title={<button>welcome</button>} description={"desc"} />
    )
}