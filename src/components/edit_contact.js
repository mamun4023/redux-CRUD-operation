import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
const EditContact = ()=>{

   const {id} = useParams();
   const contacts = useSelector(state=>state);
   const dispatch = useDispatch();
   const history = useHistory();
   const currentContact = contacts.find(contact => contact.id === parseInt(id) && contact);
   console.log(currentContact);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState();
   

   useEffect(()=> {
       if(currentContact){
         setName(currentContact.name);
         setEmail(currentContact.email);
         setNumber(currentContact.number);
       }
   },[currentContact])
    

   // validation
   const HandleUpdate = (e)=> {
    e.preventDefault();
    
    const checkEmail = contacts.find((contact=> contact.id !== parseInt(id) && contact.email === email))
    const checkNumber = contacts.find((contact=> contact.id !== parseInt(id) && contact.number === parseInt(number)))
    
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
        id : parseInt(id),
        name,
        email,
        number
    };
    

    // action is here
    dispatch({ type : "UPDATE_CONTACT", payload : data})
    toast.success("user updated");
    history.push('/');
}

    return(
        <>
        <div className = "container">
                <div className = "row">
                    <h1 className = "display-3 text-center p-5 " > Edit Contact {id} </h1>
                    <div className = "col-md-6 shadow mx-auto">
                        <form onSubmit ={HandleUpdate} >
                            <div className = "form-group my-2">
                                <input 
                                    type = "text" 
                                    placeholder = "Name" 
                                    className = "form-control" 
                                    value = {name}
                                    onChange = {(e)=> setName(e.target.value)}
                                />
                            </div>
                            <div className = "form-group my-2">
                                <input 
                                    type = "text" 
                                    placeholder = "Email" 
                                    className = "form-control" 
                                    value = {email}
                                    onChange = {(e)=> setEmail(e.target.value)}
                                />
                            </div>
                            <div className = "form-group my-2">
                                <input 
                                    type = "text" 
                                    placeholder = "Number" 
                                    className = "form-control" 
                                    value = {number}
                                    onChange = {(e)=> setNumber(e.target.value)}
                                    />
                            </div>
                            <div className = "form-group my-2">
                                <button className = "btn btn-dark"> Update </button>
                                <Link to = "/" className = "btn btn-dark mx-2 bg-danger"> Cancel </Link>
                            </div>
 
                        </form>
                        
                    </div>
                </div>
        </div>
        </>

    )
}

export default EditContact;