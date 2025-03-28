import { Component, Input } from '@angular/core';
import { filters } from 'src/app/Module/feature/components/filter-products/FilterData';
import { sareesData } from 'src/Data/sarees';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent {

  category:any
   filterData:any
   sarees:any
   
  
   constructor( private router: Router, private activatedRoute: ActivatedRoute){
  
   }
    @Input() selectedSection:any;
  
    ngOnInit() {
      this.filterData = filters
      this.sarees=sareesData
  
    }
  
    handleMultipleselectFilter(value:string, sectionId:string){
      const queryParams={...this.activatedRoute.snapshot.queryParams};
      console.log(queryParams);
      const filterValues =queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];
  
      const valueIndex= filterValues.indexOf(value);
  
      if(valueIndex!= -1){
        filterValues.splice(valueIndex,1);
      }else{
        filterValues.push(value);
      }
  
      if(filterValues.length>0){
        queryParams[sectionId]=filterValues.join(',');
      }
      else{
        delete queryParams[sectionId];
      }
  
      this.router.navigate([],{queryParams})
    }
  
  
  }
  

