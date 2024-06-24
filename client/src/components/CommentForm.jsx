import { useState } from 'react';


function CommentForm() {

    const [formData, setFormData] = useState({
        text: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        setFormData({text: ''})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            placeholder='Comment'
            name='text'
            value={formData.text}
            onChange={handleChange}
            />
            <button>Leave Comment</button>
        </form>
     );
}

export default CommentForm;