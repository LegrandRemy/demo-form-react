import React from 'react'

/**
 * custom formulaire pour la gestions des offres
 * permet de créer un formulaire par composition 
 * @param {object} props 
 * @param {string} props.title 
 * @param {ReactNode} props.children 
 * @param {string} props.footer 
 * @returns 
 */
const CustomForm = (props) => {
  const {title, footer, children} = props
  return (
   <div>
        <form>
            {/* title */}
            <div>
                { 
                    <h1>{title ? `${title}` : "pas de titre"}</h1> 
                }
            </div>

            {/* body */}
            <div>
                {children}
            </div>

            {/* footer */}
            <div>

                    <h1>{footer ? `${footer}` : "pas de footer"}</h1> 
            </div>
        </form>
   </div>
    
  )
}

export default CustomForm