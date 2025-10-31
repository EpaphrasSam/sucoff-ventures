"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea, Button } from "@heroui/react";

const schema = z.object({
	name: z.string().min(2, "Name is required"),
	email: z.string().email("Valid email required"),
	phone: z.string().optional(),
	message: z.string().min(10, "Message is too short"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

	const onSubmit = async (values: FormValues) => {
		// For now, just log. Wire to backend/email later.
		console.log("Contact form submitted", values);
		reset();
	};

	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h1 className="font-heading text-3xl font-semibold">Contact Us</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-6 sm:max-w-xl">
				<Input label="Name" variant="bordered" {...register("name")} isInvalid={!!errors.name} errorMessage={errors.name?.message} />
				<Input label="Email" type="email" variant="bordered" {...register("email")} isInvalid={!!errors.email} errorMessage={errors.email?.message} />
				<Input label="Phone" variant="bordered" {...register("phone")} />
				<Textarea label="Message" variant="bordered" minRows={5} {...register("message")} isInvalid={!!errors.message} errorMessage={errors.message?.message} />
				<Button color="primary" type="submit" isLoading={isSubmitting} className="w-fit">Send Message</Button>
			</form>
		</section>
	);
}
