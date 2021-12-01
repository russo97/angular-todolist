import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Task } from "../models/Task";

const URLBase = "http://localhost:3000";

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) {
  }

  ngOnInit () {
    this.addListItem();
  }

  public getList () {
    return this.http.get<Task[]>(`${URLBase}/tasks`);
  }

  public addListItem () {
    const { randomID } = this;

    this.http.post<Task>(`${URLBase}/tasks`, {
      "id": randomID(),
      "done": false,
      "title": "acordar",
      "description": 'acordar as 7hrs em ponto'
    }).subscribe(data => {
      // action after added a post
    });
  }

  public deleteTask (id: string) {
    return this.http.delete<Task>(`${URLBase}/tasks/${id}`);
  }

  getByID (id: string) {
    return this.http.get<Task>(`${URLBase}/tasks/${id}`);
  }

  public markAsDone (task: Task) {
    const {
      id,
      done,
      title,
      description
    } = task;

    const PUT_URL = `${URLBase}/tasks/${id}`;

    return this.http.put<Task>( PUT_URL, { title, description, "done": !done } );
  }

  private randomID () {
    return btoa(String(Date.now()));
  }
}
