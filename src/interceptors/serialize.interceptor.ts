import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        //run code before request, code goes here.
        console.log("beofre handler", context)

        return handler.handle().pipe(
            map((data: any) => {
                //run something before the response is sent out
                console.log("running before response is sent out", data)
            })
        )
    }
}