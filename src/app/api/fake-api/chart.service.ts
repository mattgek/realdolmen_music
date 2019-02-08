import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfig } from '../../app.config';
import { IChartService } from '../interface';
import { IChart } from '../model';

@Injectable()
export class ChartService implements IChartService {
  constructor(private http: HttpClient) {}

  public getChart(): Observable<IChart[]> {
    return this.http.get<IChart[]>(`${appConfig.baseUrl}chart`);
  }
}
