import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './components/TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className='tasksHeader'>
      <h1>Reading week</h1>
      <AddTask />

      </div>
      <div className='tasks'>
      <TaskList />
      </div>
      
    </TasksProvider>
  );
}
