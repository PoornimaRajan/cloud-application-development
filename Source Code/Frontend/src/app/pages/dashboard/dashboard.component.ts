import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})


export class DashboardComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  brands:any;
  private imageSources=["assets/images/img1.png","assets/images/img3.jpg","assets/images/img4.jpg","assets/images/img9.jpg","assets/images/img7.jpeg"];
  private deltaUp:boolean = true;
  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.options= {
        series: {
            type: 'sankey',
            layout:'none',
            focusNodeAdjacency: 'allEdges',
            data: [{
                name: 'camera'
            },{
                name: 'primary'
            },{
                name: 'selfie'
            },{
                name: 'memory'
            }, {
                name: 'battery'
            }, {
                name: 'display'
            }, {
                name: 'positive'
            }, {
                name: 'neutral'
            },{
                name: 'negative'
            }],
            links: [
                {
                    source: 'camera',
                    target: 'primary',
                    value: 7
                },
                {
                    source: 'camera',
                    target: 'selfie',
                    value: 3
                },
            
                {
                source: 'primary',
                target: 'positive',
                value: 8
            },
            {
                source: 'primary',
                target: 'neutral',
                value: 2
            },
            {
                source: 'selfie',
                target: 'negative',
                value: 4
            },{
                source: 'selfie',
                target: 'positive',
                value: 5
            },{
                source: 'memory',
                target: 'positive',
                value: 4
            },
            {
                source: 'memory',
                target: 'neutral',
                value: 5
            },
            {
                source: 'memory',
                target: 'negative',
                value: 1
            },{
                source: 'battery',
                target: 'positive',
                value: 1
            },
            {
                source: 'battery',
                target: 'neutral',
                value: 2
            },
            {
                source: 'battery',
                target: 'negative',
                value: 7
            },{
                source: 'display',
                target: 'positive',
                value: 4
            },
            {
                source: 'display',
                target: 'neutral',
                value: 2
            },
            {
                source: 'display',
                target: 'negative',
                value: 4
            },]
        }
    };
    
    });
  }
  getData(): Observable<Photo[]> {
    return this.http.get('http://35.233.61.218:7000/getAllPhoneBrand)
      .map(res => {
		  this.brands = res
		  }
		 );
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

