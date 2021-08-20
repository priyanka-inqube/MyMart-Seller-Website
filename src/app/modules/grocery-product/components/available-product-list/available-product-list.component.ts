import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
declare var $ : any

@Component({
  selector: 'app-available-product-list',
  templateUrl: './available-product-list.component.html',
  styleUrls: ['./available-product-list.component.css']
})
export class AvailableProductListComponent implements OnInit {
  groceryCategories = []
  subCategories = []

  constructor(private __category:CategoryService) { }
  ngOnInit(): void {
    $(document).ready(function(){$(".dash-product-item .graphic_thumb_caro").slick()});
    // this.groceryLevelCategory()
  }

  groceryLevelCategory(){
    this.__category.fetchSubLevelCategory()
                    .subscribe((resp)=>{
                      console.log(resp.response);
                      this.groceryCategories = resp.dropDownOptions
                      
                    },
                    (err)=>{
                      console.log(err);
                      
                    })
  }

  subLevelCategory(catName){
    this.__category.fetchSubLevelCategory(catName)
                    .subscribe((resp)=>{
                      this.subCategories = resp.dropDownOptions
                      console.log(this.subCategories);
                      
                    },
                    (err)=>{
                      console.log(err);
                      
                    })
  }

}
