 $http.defaults.headers.common["Ocp-Apim-Subscription-Key"] = "194333f5b09188fbda8c4a3bbfea30b2";
  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
		],

	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		NgbModule

		],
		providers: [AppComponent],
		bootstrap: [AppComponent]
})
export class AppModule { }

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'app working!';
 	private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=194333f5b09188fbda8c4a3bbfea30b2';
	data: any = {};
}

constructor(private http: Http) {
	console.log('Hello');
	this.getContacts();
	this.getData();
}

getData() {
	return this.http.get(this.apiUrl)
	.map((res: Response) => res.json())
}

getContacts() {
	this.getData().subscribe(data => {
	console.log(data);
	this.data = data
	})
}
}