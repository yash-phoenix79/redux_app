import { Provider } from "react-redux"
import store from "./store/store"
import { Container, Typography } from "@mui/material"
import AddHabitForm from "./components/add-habit-form"
import HabitList from "./components/habit-list"


function App() {

  return (
    <>
      <Provider store={store}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center">Habit Tracker</Typography>
          <AddHabitForm />
          <HabitList />
        </Container>
      </Provider>
    </>
  )
}

export default App
