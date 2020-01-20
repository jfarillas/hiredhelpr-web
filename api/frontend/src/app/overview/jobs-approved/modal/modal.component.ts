import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  imgUrl: string;
  public radioGroupForm: FormGroup;

  selectedIndex: any;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }

  selected(e: Number) {
    this.selectedIndex = e;
    var url: string;
    switch (e) {
      case 0:
        url = '/assets/tab1.jpg';
        break;
      case 1:
        url = '/assets/tab2.jpg';
        break;
      case 2:
        url = '/assets/tab3.jpg';
        break;
      case 3:
        url = '/assets/tab4.jpg';
        break;
      case 4:
        url = '/assets/tab5.jpg';
        break;
      default:
        url = '/assets/tab1.jpg';
        break;
    }

    this.setUrl("url('" + url + "')");
  }

  setUrl(img: string) {
    this.imgUrl = img;
  }
  getUrl() {
    return this.imgUrl;
  }
}
