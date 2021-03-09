import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Survey } from './Survey';
import { User } from './User';

@Entity("surveys_users")
class SurveyUser {
  @PrimaryColumn()
  readonly  id: string;
   
   @Column()
   user_id: string;
   
   @ManyToOne(() => User)
   @JoinColumn({name:"user_id"}) 
   user: User

   @Column()
   survey_id: string;
   
   @ManyToOne(() => Survey)
   @JoinColumn({name:"Survey_id"})  //vai fazer mostrar o objeto completo no controller passa relations e os campos;
   survey: Survey;

   @Column()
   value: number;
 
   @CreateDateColumn()
   created_at: Date;
 
   constructor()
   {
     if(!this.id) {
       this.id = uuid()
     }
   }
} 

export { SurveyUser }