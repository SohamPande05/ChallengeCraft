import { Route,Routes } from 'react-router-dom'
import './App.css'
import ClerkProviderWithRouters from './auth/ClerkProviderWithRouther'
import {AuthenticationPage} from './auth/AuthenticationPage'
import { ChallengeGenerator } from './challenge/ChallengeGenerator'
import {HistoryPanel} from './history/HistoryPanel'
import {Layout} from './layout/Layout'


function App() {
 

  return (
    <ClerkProviderWithRouters>
      <Routes>
        <Route path="/sign-in/*" element = {<AuthenticationPage />} />
        <Route path="/sign-up" element = {<AuthenticationPage />} />
        <Route element = {<Layout />} >

          <Route path ="/" element = { <ChallengeGenerator />} />
          <Route path='/history' element = { < HistoryPanel />} />

        </Route>

      </Routes>
    </ClerkProviderWithRouters>
    
    
  )
}

export default App
