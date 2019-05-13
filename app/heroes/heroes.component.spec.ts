import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";
import { Mock } from "protractor/built/driverProviders";

describe('HeroesComponent',()=>{

    let component : HeroesComponent;
    let HEROES;
    let mockHeroService ;


    beforeEach(()=>{


        HEROES=[

            {id:1,name:'Spider DUde', strength:8},
            {id:2,name:'Batman', strength:22},
            {id:3,name:'Superman', strength:34}
        ]

        mockHeroService =jasmine.createSpyObj(['getHeroes','addHero', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);



    })

    describe('delete',()=>{

   it('should remove the indicated hero  from the  heros list',()=>{

    mockHeroService.deleteHero.and.returnValue(of(true))
    component.heroes = HEROES;

    component.delete(HEROES[2]);
    expect(component.heroes.length).toBe(2);
   })

   it('should call delete hero',()=>{

    mockHeroService.deleteHero.and.returnValue(of(true))
    component.heroes = HEROES;
    component.delete(HEROES[2]);
expect(mockHeroService.deleteHero).toHaveBeenCalled();
//deleting with criteria
expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    
   })


    })


})