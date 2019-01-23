import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

// import {
//   FormGroup,
//   FormBuilder,
//   Validators,
//   FormControl
// } from '@angular/forms';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

export interface Doctorinformation {
  value: string;
  speciality: string;
}

export interface Doctorlocation {
  value: string;
  name: string;
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctorForm: FormGroup;

 public underlinbg = 'download.png';
 public  doctorinfo_banner = ' doctorinfo.jpg';
 public  pro = 'profile1.jpg';


  public doctors = [];
  doctorprofiehidden: any;
  public data: any;
  doctorpro: any ;
  doctorname: string;
  selectedDevice: any;
  constructor(private _doctorService: DoctorService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.doctorsearchlist();

//  this._doctorService.getDoctor();

    this.doctorprofiehidden = 0;
      this.doctorpro = true;
    this._doctorService.getDoctor()
    .pipe(first())
    .subscribe(data => {
            //  this.loading = false;
            //  this.data=data;
            //  this.patientcount=this.data.length;
            this.data = data;
            console.log(this.data );
            this.doctorsearchlist();

        },
        error => {
            console.log(error);
            // this.loading = false;
            // this.alertService.error(error);
            alert('some  error please try again later');
            // this.loading = false;
        });


// function searchclick() {
//   if (this.doctorForm.value.speciality == 'Fertility') {
//     this.data.speciality
//   }
// }





  }



  private doctorsearchlist() {


    this.doctorForm = this.formBuilder.group({
        // tslint:disable-next-line
        speciality: ['', Validators.required],
        // name: [this.data.name, Validators.required]
    });


}



    selectedValue : string ;

    doctorinformation : Doctorinformation [] = [
      {value: 'Fertility', speciality: 'Fertility'},
      {value: 'Childcare', speciality: 'Childcare'},
      {value: 'WomenHealth', speciality: 'Women Health'},
    ];

    doctorlocation : Doctorlocation [] = [
      { value : 'ChildCare', name: 'Chennai'},
      { value : 'WomenHealth', name : 'Coimbatore'},
      { value : 'FertilityCare', name: 'Salem'},
    ];

    selectedloaction:string;

    // submitted = false;
    // res : any;
    searchclick() {
      // alert(this.doctorForm.value);
      console.log(this.doctorForm.value.speciality);
      // // this.submitted = true;
      if (this.doctorForm.value.speciality == 'Fertility') {
        this.doctorpro = false;
      // this.selectedDevice = JSON.parse();
      this.data = this.data.filter(res => {
        return res.doctorForm.value.speciality.toLocaleLowerCase().match(this.data.speciality.toLocaleLowerCase());
      });
      console.log( this.selectedDevice);
            console.log(this.data);
      }
      if (this.doctorForm.value.speciality == 'Childcare') {
        this.doctorpro = false;
      }
      if (this.doctorForm.value.speciality == 'Women Health') {
        this.doctorpro = false;
      }
      // this.loading = true;
      this._doctorService.update_doctor(this.doctorForm.value)

          .pipe(first())
          .subscribe(
              (res: Response) => {
                alert('ghgg');
                  // this.loading = false;
                  console.log(res);
//                   if (this.doctorForm.value.speciality == 'Fertility') {
// alert();
// this.data = this.data.filter(Response => {
//   return Response.speciality.toLocaleLowerCase().match(this.data.speciality.toLocaleLowerCase());
// });
//                   }
                  // if (this.doctorForm.value.speciality) {
                  //       console.log(this.doctorForm.value.name);
                  //       this.data = this.data.filter(res => {
                  //       return res.speciality.toLocaleLowerCase().match(this.doctorname.toLocaleLowerCase());
                  //     });
                  // }
              },
              error => {
                  alert(error);
                  // this.loading = false;
              });

  }





    // onSubmit() {
    //   console.log('form submitted');
    //   // this.data = this.data.filter(res => {
    //   //   return res.name.toLocaleLowerCase().match(this.doctorname.toLocaleLowerCase());
    //   // });
    //   if (this.form.valid) {
    //     console.log('form submitted');
    //   } else {
    //     // validate all form fields
    //   }
    // }

    // onSelectedName(val: any) {
    //   this.custom(val);
    // }
    // custom(val: any) {
    //   this.data = this.data.filter(res => {
    //     return res.name.toLocaleLowerCase().match(this.doctorname.toLocaleLowerCase());
    //   });
    // }

  //   onChange(val) {
  //     // this.selectedDevice = JSON.parse(val);
  //     this.data = this.data.filter(res => {
  //       return res.name.toLocaleLowerCase().match(this.selectedDevice.toLocaleLowerCase());
  //     });
  //     console.log( this.selectedDevice);
  // }

  doctordetails() {
      this.router.navigateByUrl('/doctorsdetais');
  }
  doctorprofile() {
    this.router.navigateByUrl('/doctorsprofile');
}
}
