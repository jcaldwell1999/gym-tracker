import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [workoutName, setWorkoutName] = useState('');

  const [exerciseName, setExerciseName] = useState("");
  const [defaultSets, setDefaultSets] = useState(3);

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

  // Remove Workout function
  const handleRemoveWorkout = (removeId) => {
    const newWorkouts = workouts.filter((workout) => workout.id !== removeId);
    setWorkouts(newWorkouts);
  }

  // Remove exercise function
  const handleRemoveExercise = (workoutId, removeId) => {
    const newWorkouts = workouts.map((workout) => {
      if (workout.id === workoutId) {
        const updatedExercises = workout.exercises.filter((exercise) => exercise.id !== removeId);
        return { ...workout, exercises: updatedExercises };
      }
      return workout;
    });
    setWorkouts(newWorkouts);
  }
  
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

  // Create exercise function
  function handleCreateExercise(workoutId) {
    // Check if workout field is population
    if (exerciseName.trim() === "") {
      return;
    }

    const newExercise = {
      id: Date.now(), //Temporary
      name: exerciseName,
      defaultSets: defaultSets,
      position: 1
    }

    const updatedWorkouts = workouts.map((workout) => {
      if (workout.id === workoutId) {
        const updateExercise = {...workout, exercises: [...workout.exercises, newExercise]};
        return updateExercise;
      } else {
        return workout;
      }
    })

    setWorkouts(updatedWorkouts);
    setExerciseName('');

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
              <li key={workout.id}>
                <h3>{workout.name}</h3>

                <input
                  type="text"
                  value={exerciseName}
                  onChange={(event) => setExerciseName(event.target.value)}
                  placeholder="Exercise name"
                  style={{ maxWidth: '200px'}}
                />

                <input
                  type="number"
                  value={defaultSets}
                  onChange={(event) => setDefaultSets(Number(event.target.value))}
                  min="1"
                  style={{ maxWidth: '48px'}}
                />

                <button onClick={() => handleCreateExercise(workout.id)}>
                  Add Exercise
                </button>

                <button onClick={() => handleRemoveWorkout(workout.id)}>
                  Remove Workout
                </button>

                <ul>
                  {workout.exercises.map((exercise) => (
                    <li key={exercise.id}>
                      <h3>{exercise.name}</h3>
                      <h3>{exercise.defaultSets}</h3>

                      <button onClick={() => handleRemoveExercise(workout.id, exercise.id)}>
                        Remove Exercise
                      </button>
                    </li>
                  ))}
                </ul>

              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
