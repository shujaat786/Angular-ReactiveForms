// Deep integration test of the http service;

import { TestBed } from "@angular/core/testing";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
import { USE_VALUE } from "@angular/core/src/di/injector";
import {HttpClientTestingModule,HttpTestingController}  from "@angular/common/http/testing";
import { inject } from "@angular/core/testing";

describe('HeroService' , ()=>{

    let mockMessageService ;

    let httpTestingController: HttpTestingController;
    beforeEach(()=>{
        mockMessageService =jasmine.createSpyObj(['add'])
TestBed.configureTestingModule({
    imports : [HttpClientTestingModule],
  providers:[HeroService,
    {provide : MessageService, useValue : mockMessageService}

]
 
});
httpTestingController = TestBed.get(HttpTestingController);
let msgvc = TestBed.get(MessageService);


    });

    describe('getHero',()=>{

        it('should call get with correct URL ',
        inject([HeroService,HttpTestingController],
            (service: HeroService, controller : HttpTestingController)=>{
          service.getHero(4).subscribe();

          const req =  httpTestingController.expectOne('api/heroes/4');
        req.flush({id:4, name : 'SuperDude', strength : 100});

        }));
    })
})
