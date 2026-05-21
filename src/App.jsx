import { useState } from 'react'
import './App.css'

function App() {
  const [workoutName, setWorkoutName] = useState('');
  
  return (
    <main>
      <header>
        <br></br>
        <img 
          src="/tempLogo.png" 
          alt="Gym Tracker logo" 
          width="220"
          height="200"
        />

        <h1>Gym Tracker</h1>
        <p>Create workouts, log lifts, and track progressive overload.</p>
      </header>

      <section>
        <h2>Create Workout</h2>
        
        <input
          type="text"
          value={workoutName}
          onChange={(event) => setWorkoutName(event.target.value)}
          placeholder="Upper A"
        />

        <p>You typed: {workoutName}</p>

      </section>

      <section>
        <h2>Saved Workouts</h2>
        <p>No workouts created yet.</p>
      </section>
    </main>
  );
}

export default App;
