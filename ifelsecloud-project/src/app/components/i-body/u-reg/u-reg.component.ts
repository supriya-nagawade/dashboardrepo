import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-reg',
  templateUrl: './u-reg.component.html',
  styleUrls: ['./u-reg.component.css'],
})
export class URegComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = [
    {
      url: 'https://i.ibb.co/Msmvs4r/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash.jpg',
      userName: 'patel carter',
      contry: 'Us',
      pValue: 50,
    },

    {
      url: 'https://i.ibb.co/ZN4X6Nn/christina-wocintechchat-com-5-CBVCLBs-Y-unsplash.jpg',
      userName: 'Lynda bass',
      contry: 'Asia',
      pValue: 50,
    },
    {
      url: 'https://i.ibb.co/R3LC5L2/brooke-cagle-No-Rsy-Xm-HGp-I-unsplash.jpg',
      userName: 'cory ford',
      contry: 'Us',
      pValue: 50,
    },
    {
      url: 'https://i.ibb.co/N1Kdpd9/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg',
      userName: 'micheal bush',
      contry: 'India',
      pValue: 50,
    },
    {
      url: 'https://i.ibb.co/Qm1k1MB/zahir-namane-hwc7e-IQi-TCE-unsplash.jpg',
      userName: 'hazel brady',
      contry: 'Asia',
      pValue: 50,
    },
  ];
}
