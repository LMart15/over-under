import {
  Component
} from '@angular/core';
import { Contacts} from 'ionic-native';


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

  pickContact() {
      Contacts.pickContact()
        .then(contact => {
            this.topic = contact.displayName;
        })
        .catch(error => {
          //User didn't select a contact
        });
  }

}

