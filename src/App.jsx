// Components
import Image from "./components/Image.jsx";
import Header from "./components/Header.jsx";
import Links from "./components/Links.jsx";

// Styles
import './scss/styles.scss'
import * as Sentry from "@sentry/browser";

// App component
function App() {

  // GlitchTip report
  Sentry.init({ dsn: "https://cc651ddf775a40cf8747cee093c2b194@glitch.salahineo.com/1" });

  return (
    <main id="main-content" className="container" role="main">
      <Image/>
      <Header/>
      <Links/>
    </main>
  )
}

export default App
