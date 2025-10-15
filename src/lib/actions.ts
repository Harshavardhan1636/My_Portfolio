
'use server';

import { generateDynamicBio } from '@/ai/flows/generate-dynamic-bio';
import { handleContactForm } from '@/ai/flows/handle-contact-form';
import { z } from 'zod';

const bioSchema = z.object({
  skills: z.string().min(5, { message: 'Please list at least one skill.' }),
  experiences: z
    .string()
    .min(10, { message: 'Please describe your experience briefly.' }),
});

type BioState = {
  bio?: string | null;
  errors?: {
    skills?: string[];
    experiences?: string[];
  };
  message?: string | null;
};

export async function generateBioAction(
  prevState: BioState,
  formData: FormData
): Promise<BioState> {
  const validatedFields = bioSchema.safeParse({
    skills: formData.get('skills'),
    experiences: formData.get('experiences'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please fill out all fields.',
    };
  }

  try {
    const result = await generateDynamicBio({
      skills: validatedFields.data.skills,
      experiences: validatedFields.data.experiences,
    });
    return { bio: result.bio };
  } catch (e) {
    console.error(e);
    return { message: 'An error occurred while generating the bio.' };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function submitContactFormAction(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors in the form.',
      success: false,
    };
  }

  try {
    // Call the Genkit flow to process the contact form
    const result = await handleContactForm(validatedFields.data);
    console.log('Contact form processed by AI:', result);

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error('Error processing contact form with Genkit:', error);
    return {
      message: 'Sorry, there was an error submitting your message. Please try again later.',
      success: false,
    }
  }
}
