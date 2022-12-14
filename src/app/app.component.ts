import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaddem';

  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit() {
    
    
    this.loadScript('../assets/lib/easing/easing.min.js');

    
    this.loadScript('../assets/js/main.js')
    this.loadScript('../assets/back/vendor/chart.js/Chart.min.js')
    this.loadScript('../assets/back/js/demo/chart-area-demo.js')
    this.loadScript('../assets/back/js/demo/chart-pie-demo.js')
  


  

  }
}


