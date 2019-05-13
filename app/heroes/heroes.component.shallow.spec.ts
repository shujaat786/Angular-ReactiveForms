import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";

describe('HeroesComponent (shallow tests) ', ()=>{

    let fixture : ComponentFixture<HeroesComponent>
    let mockHeroService ;
    let HEROES;


    @Component({
        selector: 'app-hero',
        template: '<div></div>',
        
      })
       
      //fakechildcomponent to remove the schemas NO ERROR
      class FakeHeroComponent {
        @Input() hero: Hero;
       // @Output() delete = new EventEmitter();
      }




    beforeEach(()=>{

        HEROES=[

            {id:1,name:'Spider DUde', strength:8},
            {id:2,name:'Batman', strength:22},
            {id:3,name:'Superman', strength:34}
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero', 'deleteHero']);

        TestBed.configureTestingModule({
    declarations :[HeroesComponent,
        FakeHeroComponent],
    providers:[
       { provide : HeroService ,  useValue: mockHeroService } 
    ],
   // schemas : [NO_ERRORS_SCHEMA]
  
      });

      fixture =    TestBed.createComponent(HeroesComponent,);

     });

     it('should set the heroes from the service corectly',()=>{ 
      mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();// to manullay calls ngOnIt ourselves.
         expect(fixture.componentInstance.heroes.length).toBe(3);


     })

     it('should  create 1 li foreach hero',()=>{
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();
         
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);


     })



    
})