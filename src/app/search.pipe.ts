import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data,search) {

      if(!data || !search){
        return data;
      }
      return data.filter ((res)=>{
        return res.date.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })


  }

}
