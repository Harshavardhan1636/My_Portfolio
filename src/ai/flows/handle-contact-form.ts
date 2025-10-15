
'use server';

/**
 * @fileOverview A Genkit flow to handle contact form submissions.
 *
 * - handleContactForm - A function that processes the contact form data.
 * - ContactFormInput - The input type for the handleContactForm function.
 * - ContactFormOutput - The return type for the handleContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email of the person.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  summary: z.string().describe('A one-sentence summary of the user\'s message.'),
  category: z.enum(['General Inquiry', 'Job Opportunity', 'Collaboration', 'Feedback', 'Other']).describe('The category of the message.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function handleContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return handleContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'handleContactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are an AI assistant that processes contact form submissions for a personal portfolio website.
  Analyze the following message and provide a concise summary and categorize it.

  Name: {{{name}}}
  Email: {{{email}}}
  Message:
  {{{message}}}

  Categorize the message into one of the following: General Inquiry, Job Opportunity, Collaboration, Feedback, or Other.
  `,
});

const handleContactFormFlow = ai.defineFlow(
  {
    name: 'handleContactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
