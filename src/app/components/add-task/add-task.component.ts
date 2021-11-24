import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Task} from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  tickets: number = 0;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {

    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit(){

    if(!this.text){

      alert('Please add movie!');
      return;
    }

    if(!this.day){
      alert('please add date')
    }

    const newTask = {
      
      text: this.text,
      day: this.day,
      tickets: this.tickets,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.tickets = 0;
    this.reminder = false;
  }
}
