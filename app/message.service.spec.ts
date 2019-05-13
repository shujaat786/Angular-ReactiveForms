import { MessageService } from "./message.service";

describe ('Message Service', ()=>{

    let service : MessageService 

    beforeEach(()=>{

        service = new MessageService();
    })

    it('should have no  mesage to start ',()=>{

        expect(service.messages.length).toBe(0);

    })

    it('should have add a  mesage when a add is called  ',()=>{
        service.add('message1');

        expect(service.messages.length).toBe(1);
        
    })

    it('should have remove a  mesage when a clear  is called  ',()=>{
        service.add('message1');

        service.clear();
        expect(service.messages.length).toBe(0);
        
    })
})