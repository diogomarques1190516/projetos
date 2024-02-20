import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {
  title = "Create a Route"

  isSuccessfull = false;
  isFailure = false;
  loading = false;

  form: any = {
    distance: null, time: null, extraTime: null, energy: null, originId: null, destinationId: null, width: null
  };


  constructor(private routeService: RouteService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  submit(create: any) {

    const { distance, time, extraTime, energy, originId, destinationId, width } = this.form;

    this.routeService.postRoutes(distance, time, extraTime, energy, originId, destinationId, width).subscribe({
      next: data => {
        console.log(data);
        this.loading = false;
        this.isFailure = false;
        this.isSuccessfull = true;
      },
      error: err => {
        console.log("Error")
        this.loading = false;
        this.isSuccessfull = false;
        this.isFailure = true;
      }
    });
  }

  div1Function() {
    this.isFailure = false;
    this.isSuccessfull = false;
    this.loading = true;
  }

}