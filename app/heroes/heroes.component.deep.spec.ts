import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroComponent } from "../hero/hero.component";

describe('HeroesComponent (deep tests) ', ()=>{

    let fixture : ComponentFixture<HeroesComponent>
    let mockHeroService ;
    let HEROES;





    beforeEach(()=>{

        HEROES=[

            {id:1,name:'Spider DUde', strength:8},
            {id:2,name:'Batman', strength:22},
            {id:3,name:'Superman', strength:34}
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero', 'deleteHero']);

        TestBed.configureTestingModule({
    declarations :[HeroesComponent,
       HeroComponent],
    providers:[
       { provide : HeroService ,  useValue: mockHeroService } 
    ],
   schemas : [NO_ERRORS_SCHEMA]
  
      });

      fixture =    TestBed.createComponent(HeroesComponent,);
      

     

     });

     it('should be true ',()=> {

         expect(true).toBe(true);

         // finding  elements by directive

        


     })

     it('should render each hroes as a heroes component ',() =>{
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges(); // trigger the ngOnIt
       const heroComponentDEs =  fixture.debugElement.queryAll(By.directive(HeroComponent))
       expect(heroComponentDEs.length).toEqual(3); 
       expect(heroComponentDEs[0].componentInstance.hero.name).toEqual('Spider DUde');
       expect(heroComponentDEs[1].componentInstance.hero.strength).toEqual(22);

       for(let i=0; i< heroComponentDEs.length ;i++){
        expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
       }
       

     })

    });



