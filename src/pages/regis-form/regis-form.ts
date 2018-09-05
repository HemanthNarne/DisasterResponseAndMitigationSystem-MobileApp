import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisConfirmPage } from "../regis-confirm/regis-confirm";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { empty } from 'rxjs/Observer';

// for camera
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the RegisFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * @author Sreevani Anoohya Tadiboina
  This page refers to development of registration form

 */

@IonicPage()
@Component({
  selector: 'page-regis-form',
  templateUrl: 'regis-form.html',
})
export class RegisFormPage {

  // Setting a boolean value to the variable firstName which refers to the field First Name
  firstName: boolean = false;
  // Setting a boolean value to the variable lastName which refers to the field Last Name
  lastName: boolean = false;
  // Setting a boolean value to the variable emailId which refers to the field EmailID
  emailId: boolean = false;
  // Setting a boolean value to the variable dob which refers to the field Date of Birth
  dob: boolean = false;
  // Setting a boolean value to the variable phone which refers to the field Phone Number
  phone: boolean = false;
  // Setting a boolean value to the variable address1 which refers to the field Address line 1
  address1: boolean = false;
  // Setting a boolean value to the variable county which refers to the field County
  county: boolean = false;
   // Setting a boolean value to the variable city which refers to the field City
  city: boolean = false;
   // Setting a boolean value to the variable state which refers to the field State
  state: boolean = false;
   // Setting a boolean value to the variable country which refers to the field Country
  country: boolean = false;
   // Setting a boolean value to the variable certification which refers to the field License/Certification
  certification: boolean = false;
  // for camera
  public base64Image: string;
  


  regisForm: FormGroup;
  // The constructor is used for the purpose of validation
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    private camera: Camera) {
    this.regisForm = formBuilder.group({
      // Validation criteria of First Name field
      firstName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      // Validation criteria of Last Name field
      lastName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      // Validation criteria of EmailID field
      EmailID: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+'), Validators.required])],
      // Validation criteria of Date of Birth field
      DOB: ['', Validators.compose([Validators.pattern('[0-9]+[/]+[0-9]+[/]+[0-9]+'), Validators.required])],
      // Validation criteria of Phone Number field
      pnumber: ['', Validators.compose([Validators.minLength(10), Validators.required])],
      // Validation criteria of Address Line1 field
      Address1: ['', Validators.compose([Validators.required])],
      // Validation criteria of County field
      County: ['', Validators.compose([Validators.required])],
      // Validation criteria of City field
      City: ['', Validators.compose([Validators.required])],
      // Validation criteria of State field
      State: ['', Validators.compose([Validators.required])],
      // Validation criteria of Country field
      Country: ['', Validators.compose([Validators.required])],
      // Validation criteria of License/certification field
      License: ['', Validators.compose([ Validators.required])]

    });
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisFormPage');
  }



  // onSubmit() method refers to navigation to regis-confirmation page only if the 
  // validation criteria is satisfied.
  onSubmit() {
    // If condition is checked for the validation criteria of any field is not satified  
    if (!this.regisForm.controls.firstName.valid || !this.regisForm.controls.lastName.valid ||
      !this.regisForm.controls.EmailID.valid || !this.regisForm.controls.DOB.valid || !this.regisForm.controls.pnumber.valid ||
      !this.regisForm.controls.Address1.valid || !this.regisForm.controls.County.valid ||
      !this.regisForm.controls.City.valid || !this.regisForm.controls.State.valid ||
      !this.regisForm.controls.Country.valid || !this.regisForm.controls.License.valid) {
        // if condition checks for the validation criteria of the firstname is not satisfied
      if (!this.regisForm.controls.firstName.valid) {
        // sets the variable to false
        this.firstName = true;
      }

      // else if checks for the validation criteria of the First Name field is satisfied and if the firstName field is touched or modified
      else if(this.regisForm.controls.firstName.valid || (this.regisForm.controls.firstName.touched || this.regisForm.controls.firstName.dirty))
      {
        // else if checks for the validation criteria of the First Name field is satisfied and if the firstName field is touched or modified
        if (this.regisForm.controls.firstName.valid && (this.regisForm.controls.firstName.touched || this.regisForm.controls.firstName.dirty)) {
          // sets the variable to false
          this.firstName = false;
        }

      }
      //if condition checks for the validation criteria of the lastname field is not satisfied
      if (!this.regisForm.controls.lastName.valid) {
        // sets the variable to true
        this.lastName = true;
      }
      // else if checks for if the validation criteria of the Last Name field is satisfied and if the LastName field is touched or modified
      else if(this.regisForm.controls.lastName.valid || (this.regisForm.controls.lastName.touched || this.regisForm.controls.lastName.dirty))
    {
      // else if checks for if the validation criteria of the Last Name field is satisfied and if the LastName field is touched or modified
      if(this.regisForm.controls.lastName.valid && (this.regisForm.controls.lastName.touched || this.regisForm.controls.lastName.dirty))
      {
        // sets the variable to false
        this.lastName=false;
      }

    } 

      // if condition checks forthe validation criteria of the EmailID field is not satisfied
    if (!this.regisForm.controls.EmailID.valid) {
        this.emailId = true;
      }

      // else if checks for the validation criteria of the EmailID field is satisfied and if the EmailID field is touched or modified
      else if(this.regisForm.controls.EmailID.valid || (this.regisForm.controls.EmailID.touched || this.regisForm.controls.EmailID.dirty))
    {
      // else if checks for if the validation criteria of the EmailID field is satisfied and if the EmailID field is touched or modified
      if(this.regisForm.controls.EmailID.valid && (this.regisForm.controls.EmailID.touched || this.regisForm.controls.EmailID.dirty))
      {
        // sets the variable to false
        this.emailId=false;
      }

    } 

    // If condition checks for validation criteria of the Date of birth field is not satisfied   
    if (!this.regisForm.controls.DOB.valid) {
      // sets the variable to true
        this.dob = true;
      }
      // else if checks for if the validation criteria of the Date of Birth field is satisfied and if the Date of Birth field is touched or modified
      else if(this.regisForm.controls.DOB.valid || (this.regisForm.controls.DOB.touched || this.regisForm.controls.DOB.dirty))
    {
      // else if checks for if the validation criteria of the Date of Birth field is satisfied and if the Date of Birth field is touched or modified
      if(this.regisForm.controls.DOB.valid && (this.regisForm.controls.DOB.touched || this.regisForm.controls.DOB.dirty))
      {
        // sets the variable to false
        this.dob=false;
      }

    } 

      //If condition checks for validation criteria of the Phone Number field is not satisfied 
    if (!this.regisForm.controls.pnumber.valid) {
      // sets the variable to true
        this.phone = true;
      }

      
      // else if checks for if the validation criteria of the Phone number field is satisfied and if the Phone Number field is touched or modified 
      else if(this.regisForm.controls.pnumber.valid || (this.regisForm.controls.pnumber.touched || this.regisForm.controls.pnumber.dirty))
    {
      // else if checks for if the validation criteria of the Phone Number field is satisfied and if the Phone Numberh field is touched or modified
      if(this.regisForm.controls.pnumber.valid && (this.regisForm.controls.pnumber.touched || this.regisForm.controls.pnumber.dirty))
      {
        // sets the variable to false
        this.phone=false;
      }

    } 
    // If condition checks for validation of the Address line 1 field is not ssatisfied
      if (!this.regisForm.controls.Address1.valid) {
        // sets the variable to true
        this.address1 = true;
      }
      // else if checks for if the validation criteria of the Address line 1 field is satisfied and if the Address line 1 field is touched or modified

      else if(this.regisForm.controls.Address1.valid || (this.regisForm.controls.Address1.touched || this.regisForm.controls.Address1.dirty))
    {
      // else if checks for if the validation criteria of the Address Line 1 field is satisfied and if the Address Line 1 field is touched or modified
      if(this.regisForm.controls.Address1.valid && (this.regisForm.controls.Address1.touched || this.regisForm.controls.Address1.dirty))
      {
        // sets the variable to false
        this.address1=false;
      }

    } 
      //If condition checks for the validation of County field is not satisfied 
    if (!this.regisForm.controls.County.valid) {
      // sets the variable to true
        this.county = true;
      }

      //  else if checks for if the validation criteria of the County field is satisfied and if the County field is touched or modified
      else if(this.regisForm.controls.County.valid || (this.regisForm.controls.County.touched || this.regisForm.controls.County.dirty))
    {
      //  else if checks for if the validation criteria of the County field is satisfied and if the County field is touched or modified
      if(this.regisForm.controls.County.valid && (this.regisForm.controls.County.touched || this.regisForm.controls.County.dirty))
      {
        // sets the variable to false
        this.county=false;
      }

    } 
    // If conditionchecks for the validation of City field is not satisfied
      if (!this.regisForm.controls.City.valid) {
        // sets the variable to true
        this.city = true;
      }

      //  else if checks for if the validation criteria of the City field is satisfied and if the City field is touched or modified
      else if(this.regisForm.controls.City.valid || (this.regisForm.controls.City.touched || this.regisForm.controls.City.dirty))
    {
      //  else if checks for if the validation criteria of the City field is satisfied and if the City field is touched or modified
      if(this.regisForm.controls.City.valid && (this.regisForm.controls.City.touched || this.regisForm.controls.City.dirty))
      {
        // sets the variable to false
        this.city=false;
      }

    } 
    // If condition checks for the validation of State field is not satisfied
      if (!this.regisForm.controls.State.valid) {
        // sets the variable to true
        this.state = true;
      }

      //  else if checks for if the validation criteria of the State field is satisfied and if the State field is touched or modified
      else if(this.regisForm.controls.State.valid || (this.regisForm.controls.State.touched || this.regisForm.controls.State.dirty))
    {
      //  else if checks for if the validation criteria of the State field is satisfied and if the State field is touched or modified
      if(this.regisForm.controls.State.valid && (this.regisForm.controls.State.touched || this.regisForm.controls.State.dirty))
      {
        // sets the variable to false
        this.state=false;
      }

    } 
    // If condition checks for the validation of Country field is not satified
      if (!this.regisForm.controls.Country.valid) {
        // sets the varianle to true
        this.country = true;
      }

      //  else if checks for if the validation criteria of the Country field is satisfied and if the Country field is touched or modified
      else if(this.regisForm.controls.Country.valid || (this.regisForm.controls.Country.touched || this.regisForm.controls.Country.dirty))
    {
      //  else if checks for if the validation criteria of the Country field is satisfied and if the Country field is touched or modified
      if(this.regisForm.controls.Country.valid && (this.regisForm.controls.Country.touched || this.regisForm.controls.Country.dirty))
      {
        // sets the variable to false
        this.country=false;
      }

    } 

      // If condition checks for the validation of the License field is not satisfied
      if (!this.regisForm.controls.License.valid) {
        // sets the variable to true
        this.certification = true;
      }

      //  else if checks for if the validation criteria of the License field is satisfied and if the License field is touched or modified
      else if(this.regisForm.controls.License.valid || (this.regisForm.controls.License.touched || this.regisForm.controls.License.dirty))
    {
      //  else if checks for if the validation criteria of the License field is satisfied and if the License field is touched or modified
      if(this.regisForm.controls.License.valid && (this.regisForm.controls.License.touched || this.regisForm.controls.License.dirty))
      {
        // sets the variable to false
        this.certification=false;
      }

    } 
    }
    // else if checks if all the fields are according to the validation criteria and if all the fields are touched or modified 
    else {
      if((this.regisForm.controls.firstName.valid || (this.regisForm.controls.firstName.touched || this.regisForm.controls.firstName.dirty)) &&
      (this.regisForm.controls.lastName.valid || (this.regisForm.controls.lastName.touched || this.regisForm.controls.lastName.dirty)) &&
      (this.regisForm.controls.EmailID.valid || (this.regisForm.controls.EmailID.touched || this.regisForm.controls.EmailID.dirty)) &&
      (this.regisForm.controls.DOB.valid || (this.regisForm.controls.DOB.touched || this.regisForm.controls.DOB.dirty)) &&
      (this.regisForm.controls.pnumber.valid || (this.regisForm.controls.pnumber.touched || this.regisForm.controls.pnumber.dirty)) &&
      (this.regisForm.controls.Address1.valid || (this.regisForm.controls.Address1.touched || this.regisForm.controls.Address1.dirty)) &&
      (this.regisForm.controls.County.valid || (this.regisForm.controls.County.touched || this.regisForm.controls.County.dirty)) &&
      (this.regisForm.controls.City.valid || (this.regisForm.controls.City.touched || this.regisForm.controls.City.dirty)) &&
      (this.regisForm.controls.State.valid || (this.regisForm.controls.State.touched || this.regisForm.controls.State.dirty)) &&
      (this.regisForm.controls.Country.valid || (this.regisForm.controls.Country.touched || this.regisForm.controls.Country.dirty)) &&
      (this.regisForm.controls.License.valid || (this.regisForm.controls.License.touched || this.regisForm.controls.License.dirty)))
      {
      // sets the above declared variables to false
      this.firstName=false;
      this.lastName=false;
      this.emailId=false;
      this.dob=false;
      this.phone=false;
      this.address1=false;
      this.county=false;
      this.city=false;
      this.state=false;
      this.country=false;
      this.certification=false;
      // push() method is used to navigate to the next page
      this.navCtrl.push(RegisConfirmPage);
      }
      else{
        // used for the purpose of navigation to the next page
      this.navCtrl.push(RegisConfirmPage);
      }


    
      
    }
  }

  // for camera
  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}








