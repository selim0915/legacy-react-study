import withLoading from "./withLoading"

function Input() {
    return <input defaultValue="input" />
}

export default withLoading(Input)