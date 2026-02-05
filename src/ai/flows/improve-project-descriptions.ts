'use server';

/**
 * @fileOverview A Genkit flow for improving project descriptions using AI.
 *
 * This file defines a flow that takes a project description as input and suggests
 * keywords and improvements to enhance its SEO and readability.
 *
 * @interface ImproveProjectDescriptionsInput - Defines the input schema for the flow.
 * @interface ImproveProjectDescriptionsOutput - Defines the output schema for the flow.
 * @function improveProjectDescriptions - The main function that triggers the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveProjectDescriptionsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The project description to be improved.'),
});

export type ImproveProjectDescriptionsInput = z.infer<
  typeof ImproveProjectDescriptionsInputSchema
>;

const ImproveProjectDescriptionsOutputSchema = z.object({
  improvedDescription: z
    .string()
    .describe('The improved project description with enhanced SEO and readability.'),
  suggestedKeywords: z
    .array(z.string())
    .describe('Suggested keywords to improve SEO.'),
});

export type ImproveProjectDescriptionsOutput = z.infer<
  typeof ImproveProjectDescriptionsOutputSchema
>;

export async function improveProjectDescriptions(
  input: ImproveProjectDescriptionsInput
): Promise<ImproveProjectDescriptionsOutput> {
  return improveProjectDescriptionsFlow(input);
}

const improveProjectDescriptionsPrompt = ai.definePrompt({
  name: 'improveProjectDescriptionsPrompt',
  input: {schema: ImproveProjectDescriptionsInputSchema},
  output: {schema: ImproveProjectDescriptionsOutputSchema},
  prompt: `You are an expert in SEO and technical writing for professional portfolios. 

Your task is to improve the following project description to enhance its professional tone, readability, and SEO.

Project Description: {{{projectDescription}}}

Suggest an improved version that highlights the technical impact and complexity. Also, provide a list of specific technical keywords (technologies, methodologies, or soft skills) that would help recruiters find this project.`,
});

const improveProjectDescriptionsFlow = ai.defineFlow(
  {
    name: 'improveProjectDescriptionsFlow',
    inputSchema: ImproveProjectDescriptionsInputSchema,
    outputSchema: ImproveProjectDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await improveProjectDescriptionsPrompt(input);
    if (!output) {
      throw new Error('AI failed to generate an improved description.');
    }
    return output;
  }
);
