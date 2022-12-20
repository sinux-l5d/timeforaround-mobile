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
          if (!body) return event;
          this.parseDates(body);
        }
        return event;
      }),
    );
  }

  private parseDates(obj: any) {
    if (Array.isArray(obj)) {
      obj.forEach((item: any) => this.parseDates(item));
    } else if (typeof obj === "object") {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key === "occurredAt" || key === "reportedAt") {
            obj[key] = new Date(obj[key]);
          } else {
            this.parseDates(obj[key]);
          }
        }
      }
    }
  }
}
