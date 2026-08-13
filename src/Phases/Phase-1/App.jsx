import AmazingComponent from "./react-intro"
// import Welcome from './welcome'
import { Button } from './react-intro'
import { Hello, Greeting, ReFragment, ContactForm, UserProfile } from './basics'
import { Alert, Alerting, NewButton } from './styling'
import { CustomBtn, NewsLetter, Contact, Menu, MovieSection } from './DOM-events'

function App() {
  return (
    <div>
      <Alerting type='success'>Your changes have been saved!</Alerting>
      <Alert type='danger'>Something went wrong</Alert>
      <NewButton />
      <Hello name="Yum" alias="Batman" />
      {/* <Hello name="Yumz"/> */}
      <Greeting />
      <AmazingComponent />
      <Button />
      <div>
        <ReFragment />
        <ContactForm />
      </div>
      <div>
        <UserProfile />
      </div>
      <CustomBtn text='Like' />
      <CustomBtn text='Comment' />
      <div>
        <NewsLetter />
        <Contact />
      </div>
      <p>Menu shown here</p>
      <Menu />
      <MovieSection/>
    </div>
  )
}

export default App
