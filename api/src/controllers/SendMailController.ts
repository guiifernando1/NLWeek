import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path'; 




class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const user = await usersRepository.findOne({email});

    if (!user) {
      return response.status(400).json({
        error: "User does not exists",
      });
    }
    
    const survey = await surveysRepository.findOne({
      id: survey_id,
    });  //select survey_id = id

    if(!survey) {    //alreadyexists??
      return response.status(400).json({
        error: "Survey does not exists!"
      })
    }

    const variables = {
      name: user.name, 
      tittle: survey.title,
      survey: survey.description, 
      user_id: user.id,
      link: process.env.URL_MAIL
    }
    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");     //pega caminho .. pra voltar tipo cd ..
    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: [{user_id: user.id}, {value : null}],
      relations: ["user", "survey"],   //mostra o objeto completo
    });

    if (surveyUserAlreadyExists) {
     await SendMailService.execute(email, survey.title, variables, npsPath);
     return response.json(surveyUserAlreadyExists);
    }


    //salvar as informações na tabela de surveyuser
    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id,
    });

    await surveysUsersRepository.save(surveyUser);
    //enviar email para o usuario
 

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return response.json(surveyUser);
  }
}

export { SendMailController }