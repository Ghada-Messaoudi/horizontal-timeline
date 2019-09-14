import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  medium;
  @Input() vessel_telo_loading: any;
  @Input() vessel_telo_discharge: any;
  @Input() carrier: any;
  @Input() bill_of_lading_reference : any;
  @Input() booking_reference: any;


  constructor() { }

  ngOnInit() {
  }

}
