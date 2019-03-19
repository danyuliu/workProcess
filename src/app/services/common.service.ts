import { Injectable  } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()

export class CommonService {
    
  constructor(
    private router: Router
  ) { }

  backToMainMenu(routeLink) {
    this.router.navigate([routeLink]);
    return routeLink;
  }
  
}