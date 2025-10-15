'use server';

/**
 * @fileOverview A dynamic bio generation AI agent.
 *
 * - generateDynamicBio - A function that handles the dynamic bio generation process.
 * - GenerateDynamicBioInput - The input type for the generateDynamicBio function.
 * - GenerateDynamicBioOutput - The return type for the generateDynamicBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicBioInputSchema = z.object({
  skills: z
    .string()
    .describe('A comma separated list of skills.'),
  experiences: z.string().describe('A short summary of the users professional experiences.'),
});
export type GenerateDynamicBioInput = z.infer<typeof GenerateDynamicBioInputSchema>;

const GenerateDynamicBioOutputSchema = z.object({
  bio: z.string().describe('A compelling bio based on the provided skills and experiences.'),
});
export type GenerateDynamicBioOutput = z.infer<typeof GenerateDynamicBioOutputSchema>;

export async function generateDynamicBio(input: GenerateDynamicBioInput): Promise<GenerateDynamicBioOutput> {
  return generateDynamicBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDynamicBioPrompt',
  input: {schema: GenerateDynamicBioInputSchema},
  output: {schema: GenerateDynamicBioOutputSchema},
  prompt: `You are an AI-powered tool that specializes in generating compelling bios for users based on their skills and experiences. Your goal is to highlight the key skills and tailor the language for maximum impact.

  Skills: {{{skills}}}
  Experiences: {{{experiences}}}
  `,
});

const generateDynamicBioFlow = ai.defineFlow(
  {
    name: 'generateDynamicBioFlow',
    inputSchema: GenerateDynamicBioInputSchema,
    outputSchema: GenerateDynamicBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
