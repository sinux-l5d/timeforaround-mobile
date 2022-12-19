import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class ToDateInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          const body = event.body;
          if (body && body.occurredAt) {
            body.occurredAt = new Date(body.occurredAt);
          }
          if (body && body.reportedAt) {
            body.reportedAt = new Date(body.reportedAt);
          }
          if (body && body.rounds) {
            body.rounds.forEach((round: any) => {
              round.occurredAt = new Date(round.occurredAt);
              round.reportedAt = new Date(round.reportedAt);
            });
          }
        }
        return event;
      }),
    );
  }
}
