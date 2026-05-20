import { useState } from 'react'
import './App.css'

function App() {
  
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
        <p>Workout template form will go here.</p>
      </section>

      <section>
        <h2>Saved Workouts</h2>
        <p>No workouts created yet.</p>
      </section>
    </main>
  );
}

export default App;
