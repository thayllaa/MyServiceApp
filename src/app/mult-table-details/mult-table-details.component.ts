import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mult-table-details',
  templateUrl: './mult-table-details.component.html',
  styleUrls: ['./mult-table-details.component.css'],
})
export class MultTableDetailsComponent implements OnInit {
  n: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.n = Number(params.get('n'));
    });
  }
}
