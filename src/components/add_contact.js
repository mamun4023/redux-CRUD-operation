import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";


const AddContact = ()=>{
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState();

    const contacts = useSelector(state => state)
    const dispatch = useDispatch();
    const history = useHistory();

    const HandleSubmit = (e)=> {
        e.preventDefault();
        
        const checkEmail = contacts.find((contact=> contact.email === email && contact))
        const checkNumber = contacts.find((contact=> contact.number === parseInt(number) && contact))
        if(!name || !email || !number){
            return toast.warning("please fill in all fileds")
        }

        if(checkEmail){
            return toast.error("this email already exists")
        }

        if(checkNumber){
            return toast.error("this number is already exist");
        }


        const data = {
            id : contacts[contacts.length -1].id+1,
            name,
            email,
            number
        };
        

        // action is here
        dispatch({ type : "ADD_CONTACT", payload : data})
        toast.success("user added");
        history.push('/');
    }
   
    return(
        <>
        <div className = "container">
                <div className = "row">
                    <h1 className = "display-3 text-center p-5 " >Add Contact</h1>
                    <div className = "col-md-6 shadow mx-auto">
                        <form onSubmit = {HandleSubmit}>
                            <div className = "form-group my-2">
                            <div className = "form-group my-2">
                                <input 
                                    type = "text" 
                                    placeholder = "Name" 
                                    className = "form-control" 
                                    value = {name} 
                                    onChange = {e => setName(e.target.value)} 
                                />
                            </div>
                 
                            </div>

                            <div className = "form-group my-2">
                                <input 
                                    type = "text" 
                                    placeholder = "Email" 
                                    className = "form-control" 
                                    value = {email} 
                                    onChange = {e => setEmail(e.target.value)} 
                                />
                            </div>
                            <div className = "form-group my-2">
                                <input 
                                    type = "text" 
                                    placeholder = "Number" 
                                    className = "form-control" 
                                    value = {number} 
                                    onChange = {e => setNumber(e.target.value)} 
                                />
                            </div>
                            <div className = "form-group my-2">
                                <button className = "form-control bg-dark text-white"> Add </button>
                            </div>

                        </form>
                        
                    </div>
                </div>
        </div>
        </>

    )
}

export default AddContact;