import {
  Component
} from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  topic = "";

  get overUnder() {
    const letters = (this.topic).toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
     if ((sum % 101) < 50){
        return "Underrated"
     }else{
        return "Overrated"
     }
  }
}

