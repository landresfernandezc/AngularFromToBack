import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  text:string;
  id:string;
  date:any;
  isNew:boolean=true;
  constructor(private logService:LogService) { }

  ngOnInit(): void {
    //Subscribe to hhr selectedLog observable
    this.logService.selectedLog.subscribe(log=>{
      console.log(log)
      if(log.id!==null){
        this.isNew=false;
        this.id= log.id;
        this.text= log.text;
        this.date=log.date;
      }
    })
  }
  onSubmit(){
    console.log(this.isNew)
    if(this.isNew){
      const newLog= {
        id:this.generateId(),
        text:this.text,
        date:new Date()
      }
      this.logService.addLog(newLog)
    }else{
      const updLog = {
        id:this.id,
        text:this.text,
        date:new Date()
      }
      this.logService.updateLog(updLog)
    }
    //clear state
    this.clearState();
  }
  generateId() {
    return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx'.replace(
      /[xy]/g,function(c){
        var r =Math.random()*16 | 0,v = c =='x'?r:(r & 0x3 | 0x8);
        return v.toString(16);
      }
    )
  }
  clearState(){
    this.isNew = true;
    this.id= '';
    this.text= '';
    this.date= '';
    this.logService.clearState();
  }
}
