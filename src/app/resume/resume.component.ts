import { Component, OnInit } from '@angular/core';

declare let particlesJS: any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json');
  }

}
