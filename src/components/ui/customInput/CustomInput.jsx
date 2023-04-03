
const CustomInputStyle = ""

const CustomInput = (props) => {

    const {...inputProps} = props
    return (
        <div>
            <input type="text" defaultValue="bla" {...inputProps} /> 
        </div>
    )
}

export default CustomInput