import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {
  displayedColumns: string[] = ['message', 'date', 'timestamp', 'location', 'source', 'raw'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<StatusesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[], private http: HttpClient) { }

  ngOnInit() {
    this.dataSource = this.data;
    this.dataSource.paginator = this.paginator;
  }

  //function for downloading the xml file
  downLoadFile(title, data: any): void {
    this.http.get(data, { responseType: 'blob' }).subscribe(dataR => {
      const newBlob = new Blob([dataR], { type: 'application/xml' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const url = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = title.replace(/\s/g, '') + '.xml';
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
      );
      setTimeout(function () {
        window.URL.revokeObjectURL(url);
        link.remove();
      }, 100);
    });
  }

}
