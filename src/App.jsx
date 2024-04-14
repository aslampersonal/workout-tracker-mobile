import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Home2 from './pages/Home2';
import Signup from './pages/Signup';
import Login from './pages/Login';
import GoalSetting from './pages/GoalSetting';
import WorkoutTracker from './pages/WorkoutTracker';
import WorkoutSchedule from './pages/WorkoutSchedule';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
{ path: '/Home', element: <Home2 /> },
{ path: '/signup', element: <Signup /> },
{ path: '/login', element: <Login /> },
{ path: '/goal-setting', element: <GoalSetting /> },
{ path: '/workout-tracker', element: <WorkoutTracker /> },
{ path: '/workout-schedule', element: <WorkoutSchedule /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}