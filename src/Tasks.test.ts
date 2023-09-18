import Tasks from './Tasks';
import Task from './Task';

describe('Tasks', () => {
    let tasks: Tasks;

    beforeEach(() => {
        tasks = new Tasks();
    });

    it('should add a task', () => {
        tasks.addTask('Task 1', 'Description 1', false, 0);
        expect(tasks.getTasks().length).toBe(1);
    });

    it('should not add a task with the same name', () => {
        tasks.addTask('Task 1', 'Description 1', false, 0);
        tasks.addTask('Task 1', 'Description 2', true, 1);
        expect(tasks.getTasks().length).toBe(1);
        expect(tasks.getTask('Task 1')?.description).toBe('Description 1');
    });

    it('should get a task by name', () => {
        tasks.addTask('Task 1', 'Description 1', false, 0);
        const task: Task | undefined = tasks.getTask('Task 1');
        expect(task?.name).toBe('Task 1');
    });

    it('should delete a task by name', () => {
        tasks.addTask('Task 1', 'Description 1', false, 0);
        tasks.deleteTask('Task 1');
        expect(tasks.getTasks().length).toBe(0);
    });

    it('should update a task', () => {
        tasks.addTask('Task 1', 'Description 1', false, 0);
        tasks.updateTask('Task 1', 'New Description', true, 1);
        const task: Task | undefined = tasks.getTask('Task 1');
        expect(task?.description).toBe('New Description');
        expect(task?.status).toBe(true);
        expect(task?.hours).toBe(1);
    });
    it('should return tasks as JSON', () => {
        tasks.addTask('Task 1', 'Description 1', false, 0);
        tasks.addTask('Task 2', 'Description 2', true, 2);
        const expectedJSON = '[{"name":"Task 1","description":"Description 1","status":false,"hours":0},{"name":"Task 2","description":"Description 2","status":true,"hours":2}]';
        const receivedJSON = tasks.getTasksJSON();
        expect(receivedJSON).toBe(expectedJSON);
    });
});

export { };
