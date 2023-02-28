import Joi from 'joi';

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {}

export class ListAllEntities {}
