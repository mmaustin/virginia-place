import { Outlet, Link } from "react-router-dom"
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
        <main className="dashboard">
            <nav>
                <Link to='profile'>profile</Link>
                <Link to='/'>all jobs</Link>
                <Link to='add-job'>add jobs</Link>
            </nav>
            <div className="dashboard-page">
                <Outlet/>
            </div>
        </main>
    </Wrapper>
  )
}
export default SharedLayout