import { useState } from 'react'
import Counter from './components/Counter.jsx'
import ContactForm from './components/ContactForm.jsx'
import Submission from './components/Submission.jsx'

export default function App() {
  const [submission, setSubmission] = useState(null)

  return (
    <div className="page">
      <header className="hero">
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          Site is live
        </p>
        <h1>Welcome to your deployment test</h1>
        <p className="lead">
          If you can read this on a Vercel URL, your GitHub repository, build
          step and hosting are all wired up correctly. Push a change and watch
          it appear here.
        </p>
      </header>

      <main className="grid">
        <section className="panel" aria-labelledby="counter-title">
          <h2 id="counter-title">Counter</h2>
          <p className="muted">
            Client-side state in React. Click the button to confirm
            JavaScript runs in production.
          </p>
          <Counter />
        </section>

        <section className="panel" aria-labelledby="form-title">
          <h2 id="form-title">Say hello</h2>
          <p className="muted">
            Nothing is sent anywhere. Your details stay in this browser tab.
          </p>
          <ContactForm onSubmit={setSubmission} />
        </section>

        <section className="panel panel-wide" aria-labelledby="result-title">
          <h2 id="result-title">Submitted information</h2>
          <Submission data={submission} onClear={() => setSubmission(null)} />
        </section>
      </main>

      <footer className="footer">
        Built with React and Vite. Hosted on Vercel.
      </footer>
    </div>
  )
}
