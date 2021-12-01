import { Component, OnInit } from '@angular/core';

import { Task } from "../../models/Task";

import { TasksService } from 'src/app/services/tasks.service';
import { Observable, switchMap } from 'rxjs';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TasksService]
})
export class HomeComponent implements OnInit {
  taskList$: Observable<Task[]>;  

  constructor(private tasksService: TasksService) {
    this.taskList$ = this.tasksService.getList();
  }

  ngOnInit(): void {
  }

  updateTaskList () {
    return this.tasksService.getList();
  }

  markAsDone (task: Task): void {
    this.tasksService.markAsDone(task).subscribe({
      complete: () => {
        console.log('mark as done');

        this.taskList$ = this.updateTaskList();
      }
    });
  }

  deleteTask (id: string): void {
    this.tasksService.deleteTask(id).subscribe({
      complete: () => {
        console.log('delete done');

        this.taskList$ = this.updateTaskList();
      }
    });
  }
}
