import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imageUrl : any;

  blogs: any[]=[
    {id: 1, image: "assets/images/img1.avif"},
    {id: 2, image: "assets/images/img2.avif"},
    {id: 3, image: "assets/images/img3.avif"},
    {id: 4, image: "assets/images/img4.avif"},
    {id: 5, image: "assets/images/img5.avif"}
    ,{id: 6, image: "assets/images/img6.avif"}
  ]

  showOnModel:any;
  constructor() { }

  ngOnInit() {
  //   $(document).on('click', '.form-group img', function(){
  //     var images  = $(this).attr('src');
  //     this.imageUrl = images;
  //     console.log(this.imageUrl);
  //     setTimeout(() => {
  //         $('#exampleModal').modal('show');
  //     }, 500);
  //   })
  // }
  // $(document).on('click')
  }
  showImage(data:any){
    $('#exampleModal').modal('show');
    this.showOnModel = data;
  }

  removeImage(data:any){
    
    this.blogs.splice(this.blogs.indexOf(data),1);
  }

}
