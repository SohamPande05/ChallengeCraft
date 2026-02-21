import {SignedIn, SignedOut, UserButton} from "@clerk/clerk-react"
import {Link, Navigate, Outlet} from "react-router-dom"
export function Layout(){
    return(
    <div className="app_layout">
        <header className="app-header">
            <div className="header-content">
                <h1>ChallengeCraft</h1>
                <nav>
                    <SignedIn>
                        <Link to= "/">Generate Challenge</Link>
                        <Link to= "/history">History</Link>
                        <UserButton />
                    </SignedIn>
                </nav>
            </div>
        </header> 
        
        <main className="app-main">
            <SignedOut>
                <Navigate to="/sign-in" replace> </Navigate>
            </SignedOut>
            <SignedIn>
                <Outlet />
            </SignedIn>
        </main>

        
    </div>
    )
    

}