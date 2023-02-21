const taskSamples = ['Sleep for 12 hours', 'Study for 24 hours', 'Hunting Alligators Non STOP'];

const taskObject = (taskContent, dueDate) => {
    return {
        taskContent,
        dueDate,
        isCompleted: false,
        curState: null
    }
};

const taskSample1 = taskObject(taskSamples[0], '2021-02-02');
const taskSample2 = taskObject(taskSamples[1], '2021-02-02');
const taskSample3 = taskObject(taskSamples[2], '2021-02-02');

const createTaskItem = (taskObject) => {
    const task_item = document.createElement('li');
}