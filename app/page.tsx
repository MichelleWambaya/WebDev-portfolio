"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/Card";
import { Modal } from "@/components/Modal";

export default function Home() {
	const [openId, setOpenId] = useState<number | null>(null);

	const projects = [
		{
			id: 1,
			title: "Home Remedy App",
			summary: "Created a Home Remedy app to help users find safe, natural remedies for common ailments",
			tools: ["Node.js", "MySQL", "JavaScript"],
			href: "https://github.com/MichelleWambaya/HealthVibe-App"
		},
		{
			id: 2,
			title: "Polling App",
			summary: "Developed a Polling app for gathering user opinions and displaying instant results",
			tools: ["Node.js", "postgres(supabase)", "Backend API"],
			href: "https://github.com/MichelleWambaya/alx-polly"
		},
		{
			id: 3,
			title: "EcoLedger Prototype",
			summary: "EcoLedger is a digital waste footprint and offset platform that allows individuals and small businesses to track, reduce, and trade their waste impact online. Our mission is to create a transparent, accessible system that transforms waste management into a personal habit, while supporting local recyclers and green services. The platform aims to reduce pollution, create green jobs, and foster circular economies in Kenya and other emerging markets.Built a React Task Tracker app demonstrating proper state management and component communication",
			tools: ["React", "JavaScript", "State Management"],
			href: "https://github.com/MichelleWambaya/EcoLedger-prototype.github.io"
		},
		{
			id: 4,
			title: "Node.js Inventory API",
			summary: "Developed a Node.js Inventory API providing full CRUD operations for stock management",
			tools: ["Node.js", "REST API", "CRUD Operations"],
			href: "https://github.com/MichelleWambaya"
		}
	];

	const active = projects.find(p => p.id === openId);

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Base sharp background video */}
				<video 
					autoPlay 
					muted 
					loop 
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src="\2792370-hd_1920_1080_30fps.mp4" type="video/mp4" />
				</video>

				{/* Blurred sides overlay using mask so center stays sharp */}
				<video 
					autoPlay 
					muted 
					loop 
					playsInline
					className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl"
					style={{
						WebkitMaskImage:
							'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 92%, rgba(0,0,0,1) 100%)',
						maskImage:
							'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 92%, rgba(0,0,0,1) 100%)',
					}}
				>
					<source src="/19784309-uhd_2160_3836_24fps.mp4" type="video/mp4" />
				</video>

				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
				
				<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
					<motion.h1 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="font-serif text-5xl md:text-7xl font-bold mb-6"
					>
						Michelle Wambaya
					</motion.h1>
					<motion.p 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto"
					>
						Full-Stack Developer & UI/UX Designer
					</motion.p>
					<motion.p 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto"
					>
						Building modern, responsive web applications with clean code and exceptional user experiences.
					</motion.p>
					<motion.div 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<a 
							href="/web" 
							className="bg-dusk text-green-500 px-8 py-4 font-semibold hover:bg-green-300/80 transition-colors hover:text-white"
						>
							View My Work
						</a>
						<a 
							href="/contact" 
							className="border border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-colors"
						>
							Get In Touch
						</a>
					</motion.div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20 bg-black">
				<div className="container-max">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="font-serif text-4xl mb-6">About My Development Journey</h2>
							<p className="text-neutral-300 mb-6 text-lg leading-relaxed">
								Software developer with experience building backend APIs using Node.js and MySQL. 
								Skilled at writing clean and functional code, troubleshooting, and creating clear user documentation. 
								Able to work closely with clients to resolve issues and test new features.
							</p>
							<p className="text-neutral-400 mb-8">
								Eager to expand technical skills and contribute to software projects. 
								Experience includes building REST APIs, dashboards, and full-stack applications.
							</p>
							<div className="flex flex-wrap gap-3">
								<span className="bg-dusk/20 border border-dusk/30 px-4 py-2 text-sm text-dusk">Node.js</span>
								<span className="bg-dusk/20 border border-dusk/30 px-4 py-2 text-sm text-dusk">MySQL</span>
								<span className="bg-dusk/20 border border-dusk/30 px-4 py-2 text-sm text-dusk">JavaScript</span>
								<span className="bg-dusk/20 border border-dusk/30 px-4 py-2 text-sm text-dusk">Artificial Intelligence</span>
								<span className="bg-dusk/20 border border-dusk/30 px-4 py-2 text-sm text-dusk">NextJs</span>
								<span className="bg-dusk/20 border border-dusk/30 px-4 py-2 text-sm text-dusk">REST API</span>
							</div>
						</div>
						<div className="relative min-h-[24rem] rounded-lg overflow-hidden border border-dusk/30">
							{/* Blurred side background */}
							<video
								autoPlay
								muted
								loop
								playsInline
								className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl"
								style={{
									WebkitMaskImage:
										'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 92%, rgba(0,0,0,1) 100%)',
									maskImage:
										'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 92%, rgba(0,0,0,1) 100%)',
								}}
							>
								<source src="/video2.mp4" type="video/mp4" />
							</video>

							{/* Center sharp video */}
							<div className="relative z-10 flex justify-center items-center h-full p-4">
							<video
								controls
								className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-2xl"
								style={{ objectFit: 'contain' }}
								>
								<source src="/video2.mp4" type="video/mp4" />
							</video>
							</div>

							<div className="absolute inset-0 bg-gradient-to-t from-dusk/30 via-transparent to-transparent" />
						</div>
				</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="py-20 bg-neutral-900 text-green-500">
				<div className="container-max">
					<div className="text-center mb-16">
						<h2 className="font-serif text-4xl mb-4">Featured Web Projects</h2>
						<p className="text-neutral-400 text-lg">Explore some of my recent web development work</p>
					</div>
					
					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<Card key={project.id} project={project} onClick={() => setOpenId(project.id as number)} />
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-black ">
				<div className="container-max">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold text-dusk mb-2">7+</div>
							<div className="text-neutral-400">Web Projects</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-dusk mb-2">1+</div>
							<div className="text-neutral-400">Years Experience</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-dusk mb-2">10+</div>
							<div className="text-neutral-400">Technologies</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-dusk mb-2">100%</div>
							<div className="text-neutral-400">Client Satisfaction</div>
						</div>
					</div>
				</div>
			</section>

			{/* Project Modal */}
			<Modal open={openId !== null} onClose={() => setOpenId(null)} title={active?.title}>
				<div className="space-y-3">
					<div className="text-neutral-300 text-sm">{active?.summary}</div>
					<div className="text-neutral-400 text-xs">Stack: {active?.tools.join(", ")}</div>
					{active && (
						<a className="underline" href={active.href} target="_blank" rel="noreferrer">View on GitHub</a>
					)}
				</div>
			</Modal>
		</PageTransition>
	);
}