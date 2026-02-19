import {ClerkProvider} from "@clerk/clerk-react"
import { BrowserRouter} from "react-router-dom"
import conf from "../config/conf"

// Import your Publishable Key
const PUBLISHABLE_KEY = conf.clerkPublishableKey

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function ClerkProviderWithRouters({children}){
    return(
        <ClerkProvider publishableKey = {PUBLISHABLE_KEY}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        
        </ClerkProvider>
    )
}