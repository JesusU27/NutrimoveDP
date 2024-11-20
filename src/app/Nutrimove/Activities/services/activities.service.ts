import { Injectable } from '@angular/core';
import {BaseService} from '../../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Recommendation} from '../models/recommendations.entity';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService extends BaseService<any> {
  public endpoint = 'activities';
  public endpoint2 = 'recommendations';

  constructor(protected override http: HttpClient ) {
    super(http);
    this.resourceEndPoint = '/activities';
  }
  getRecommendations(): Observable<Recommendation[]> {
    const recommendations: Recommendation[] = [
      {
        id: 1,
        description: "Don't forget to stay hydrated, especially after exercising."
      },
      {
        id: 2,
        description: "Avoid heavy meals before sleep to improve your sleep quality."
      },
      {
        id: 3,
        description: "Take active breaks every 2 hours if you spend long periods sitting."
      },
      {
        id: 4,
        description: "Incorporate a variety of exercises into your routine to target different muscle groups."
      },
      {
        id: 5,
        description: "Prioritize getting 7-9 hours of sleep each night for optimal recovery and health."
      }
    ];


    return of(recommendations);
  }

}
