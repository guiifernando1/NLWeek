import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import SendMailService from '../services/SendMailService';




class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({email});

    if (!userAlreadyExists) {
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

    //salvar as informações na tabela de surveyuser
    const surveyUser = surveysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id,
    });
    await surveysUsersRepository.save(surveyUser);
    //enviar email para o usuario

    await SendMailService.execute(email, survey.title, survey.description);

    return response.json(surveyUser);
  }
}

export { SendMailController }