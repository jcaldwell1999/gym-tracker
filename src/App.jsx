import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [workoutName, setWorkoutName] = useState('');

  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('workouts');

    if (saved !== null) {
      return JSON.parse(saved);
    }
    return [];
  });



  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  // Create workout function
  function handleCreateWorkout() {
    // Check if workout field is populated
    if (workoutName.trim() === "") {
      return;
    }

    // Create newWorkout object
    const newWorkout = {
      id: Date.now(),
      name: workoutName,
      exercises: []
    };

    // Add to workouts array
    setWorkouts([...workouts, newWorkout]);
    // Clear workoutName input
    setWorkoutName('');
  }
  
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

        <button onClick={handleCreateWorkout}>
          Create Workout
        </button>

        <p>You typed: {workoutName}</p>

      </section>

      <section>
        <h2>Saved Workouts</h2>
        {workouts.length === 0 ? (<p>No workouts created yet.</p> 
        ) : (
          <ul>
            {workouts.map((workout) => (
              <li key={workout.id}>{workout.name}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
