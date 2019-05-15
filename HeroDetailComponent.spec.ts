import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";

import {Location} from '@angular/common';
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";

describe('HeroDetailComponent',()=>{

   let fixture : ComponentFixture<HeroDetailComponent>;

   let mockMactivatedRoute, mockHeroService , mockLocation;
    beforeEach(()=>{

        mockMactivatedRoute ={
         snapshot : {paramMap: {get:() =>{ return '3'; } } }

        }
         mockHeroService =  jasmine.createSpyObj(['getHero','updateHero']);
         mockLocation = jasmine.createSpyObj(['back']);


        TestBed.configureTestingModule({
            imports: [FormsModule], 
            declarations: [HeroDetailComponent],
            providers: [

                {provide : ActivatedRoute , useVaue: mockMactivatedRoute},
                {provide : HeroService , useVaue: mockHeroService},
                {provide : Location , useVaue: mockLocation},
            ]
        });

        fixture = TestBed.createComponent(HeroDetailComponent);

        mockHeroService.getHero.and.returnValue(of({id:3,name : 'SuperDude',strength:100}));




    });

    it('should render hero name  in h2 tag',()=>{

        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');


    })
})
