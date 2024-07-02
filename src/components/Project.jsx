import { NavLink , Outlet } from "react-router-dom"
import './project.css'
const Project = () => {
    return(
        <>


            <div className='title titleProject'>
                <h1>Our Project</h1>
            </div>

            <div className="rooms">
                <ul>
                    <li>
                        <NavLink to={'bedroom'} >bed room</NavLink>
                    </li>

                    <li>
                        <NavLink to={'bathroom'} >bathroom</NavLink>
                    </li>


                    <li>
                        <NavLink to={'kitchen'} >kitchen</NavLink>
                    </li>

                    <li>
                        <NavLink to={'livingroom'}>livingroom</NavLink>
                    </li>
                </ul>
            </div>


            <h3>project is about :</h3>
            <Outlet />



        </>

    )
}

export default Project