import Joi from 'joi';

export const todoSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().allow(''),
	done: Joi.boolean(),
	private: Joi.boolean(),
});

export const todoUpdateSchema = Joi.object({
	title: Joi.string(),
	description: Joi.string().allow(''),
	done: Joi.boolean(),
	private: Joi.boolean(),
});

export const doneUpdateSchema = Joi.object({
	done: Joi.boolean().required(),
});

export const privateUpdateSchema = Joi.object({
	private: Joi.boolean().required(),
});
