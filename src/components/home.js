import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { toast } from "react-toastify";


const Home = ()=> {

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteContact = (id)=> {
        dispatch({ type : "DELETE_CONTACT", payload : id});
        toast.success("contact deleted");
        history.push('/')
        
    }

    return(
        <>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12 my-5 text-left">
                        <Link to = "/add" className = "btn btn-outline-dark" >Add Contact </Link>
                    </div>
                    <div className = "col-md-6 mx-auto">
                        <h3 className = "text-center">Contact list </h3>
                        <table className = "table table-hover">
                            <thead className = "text-white bg-dark text-center" >
                                <tr>
                                    <th scrope = "col" >#</th>
                                    <th scrope = "col" >Name</th>
                                    <th scrope = "col" >Email</th>
                                    <th scrope = "col" >Number</th>
                                    <th scrope = "col" >Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                
                                {
                                    contacts.map((contact, id)=> (
                                        <tr key = {id}>
                                            <td> {contact.id} </td>
                                            <td> {contact.name} </td>
                                            <td> {contact.email}</td>
                                            <td> {contact.number} </td>
                                            <td className = "justify-content-between"> 
                                                <Link to = {`/edit/`+contact.id} className = "btn btn-primary"> edit </Link>
                                                <button onClick = {()=> deleteContact(contact.id)} className = "btn btn-danger" > del</button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;