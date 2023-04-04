
const CustomInputStyle = ""

const CustomInput = (props) => {

    const {...inputProps} = props
    return (
        <div>
            <input type="text" {...inputProps} /> 
        </div>
    )
}

export default CustomInput