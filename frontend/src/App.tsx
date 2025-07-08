import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('Loading...')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/greeting/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      })

      const data = await response.json()
      setMessage(data.message || 'No message received.')
    } catch (error) {
      console.error('Error:', error)
      setMessage('Something went wrong.')
    }
  }

  return (
    <div style={{ maxWidth: 500, margin: 'auto', textAlign: 'center', paddingTop: '100px' }}>
      <h1>Greeting App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', width: '80%' }}
        />
        <br /><br />
        <button type="submit" style={{ padding: '8px 16px' }}>Greet Me</button>
      </form>
      <br />
      <h2>{message}</h2>
    </div>
  )
}

export default App
