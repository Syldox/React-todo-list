import * as genresAPI from "./fakeGenreService";

const tasks = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Joging",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    description:'.....',
    status: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    description:'.....',
    status: 0
  }
];

export function getTasks() {
  return tasks;
}

export function getTask(id) {
  return tasks.find(t => t._id === id);
}

export function saveTasks(task) {
  let taskInDb = tasks.find(t => t._id === task._id) || {};
  taskInDb.name = task.name;
  // taskInDb.genre = genresAPI.genres.find(g => g._id === task.genreId);
  // taskInDb.numberInStock = task.numberInStock;
  // taskInDb.dailyRentalRate = task.dailyRentalRate;

  if (!taskInDb._id) {
    taskInDb._id = Date.now();
    tasks.push(taskInDb);
  }

  return taskInDb;
}

export function deleteTask(id) {
  let taskInDb = tasks.find(t => t._id === id);
  tasks.splice(tasks.indexOf(taskInDb), 1);
  return taskInDb;
}
