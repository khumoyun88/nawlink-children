import { NavLink , Outlet } from "react-router-dom"

const Project = () => {
    return(
        <>
            <nav>
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
            </nav>


            <h3>project is about :</h3>
            <Outlet />



        </>

    )
}

export default Project