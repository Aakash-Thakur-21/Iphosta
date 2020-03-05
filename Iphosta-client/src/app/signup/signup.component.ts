import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    constructor() { }
    test: Date = new Date();
    focus;
    focus1;
    focus2;
    public selectedValue: string;



    ngOnInit() {
        this.selectedValue = 'UserType';
    }
    public  checkUser(string) {
        // alert('hi');
        this.selectedValue = string;
    }
}
