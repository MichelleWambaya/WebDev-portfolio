"use client";

import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Modal } from "@/components/Modal";
import { motion, useScroll, useTransform } from "framer-motion";

type Certificate = { id: string; title: string; issuer: string; date: string; image: string; skills: string[]; description: string };
type NFTBadge = { id: string; title: string; issuer: string; date: string; image: string; skills: string[]; description: string };

const fragments = Array.from({ length: 12 }).map((_, i) => ({
	id: i,
	x: (i * 83) % 100,
	delay: (i % 6) * 0.6,
	text: ["const", "async", "fetch", "return", "map", "reduce", "<>", "{ }", "</>", "await", "if", "=>"][i % 12],
}));

const certificates: Certificate[] = [
	{
		id: 'holberton-software',
		title: 'Software Engineering',
		issuer: 'Holberton School',
		date: '2023-2026',
		image: '/certificates/holberton.jpg',
		skills: ['Full-Stack Development', 'Python', 'JavaScript', 'System Design'],
		description: 'Comprehensive software engineering program covering full-stack development, algorithms, and system design.'
	},
	{
		id: 'frontend-fundamentals',
		title: 'Frontend Development',
		issuer: 'FreeCodeCamp',
		date: '2023',
		image: '/certificates/frontend.jpg',
		skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
		description: 'Complete frontend development certification covering modern web technologies and responsive design principles.'
	},
	{
		id: 'react-certification',
		title: 'React Development',
		issuer: 'Meta',
		date: '2024',
		image: '/certificates/react.jpg',
		skills: ['React', 'JSX', 'State Management', 'Component Architecture'],
		description: 'Professional certification in React development, component architecture, and modern JavaScript frameworks.'
	},
	{
		id: 'nodejs-backend',
		title: 'Node.js Backend Development',
		issuer: 'Udemy',
		date: '2024',
		image: '/certificates/nodejs.jpg',
		skills: ['Node.js', 'Express.js', 'API Development', 'Database Integration'],
		description: 'Complete backend development certification covering Node.js, Express, and server-side JavaScript.'
	},
	{
		id: 'aws-cloud',
		title: 'AWS Cloud Practitioner',
		issuer: 'Amazon',
		date: '2024',
		image: '/certificates/aws.jpg',
		skills: ['AWS', 'Cloud Computing', 'DevOps', 'Infrastructure'],
		description: 'Foundational AWS certification covering cloud computing concepts and AWS services.'
	},
	{
		id: 'jp-morgan-software',
		title: 'J.P. Morgan Software Engineering Simulation',
		issuer: 'J.P. Morgan',
		date: '2024',
		image: '/resumes/R5iK7HMxJGBgaSbvk_J.P. Morgan_rvBxnvRmDYGozFEA6_1725359692211_completion_certificate.pdf',
		skills: ['Software Engineering', 'Financial Technology', 'Trading Systems', 'Risk Management'],
		description: 'Completed J.P. Morgan software engineering simulation program covering financial technology and trading systems development.'
	}
];

const nftBadges: NFTBadge[] = [
	{
		id: 'metaschool-onboarding',
		title: 'MetaSchool Web3 Onboarding Pass',
		issuer: 'MetaSchool',
		date: '2024',
		image: '/image.png',
		skills: ['Web3', 'Blockchain', 'Smart Contracts', 'NFT Development'],
		description: 'Onboarding pass to become a Web3 Dev Hero, covering the transition from Web2 to Web3 development.'
	},
	{
		id: 'aptos-platform',
		title: 'Introduction to Aptos Platform',
		issuer: 'MetaSchool',
		date: '2024',
		image: '/image copy.png',
		skills: ['Aptos', 'Blockchain', 'Smart Contracts', 'Web3'],
		description: 'Comprehensive introduction to the Aptos blockchain platform and its development ecosystem.'
	},
	{
		id: 'elon-musk-nft',
		title: 'Elon Musk NFT Smart Contract',
		issuer: 'MetaSchool',
		date: '2024',
		image: '/image copy 2.png',
		skills: ['NFT Development', 'OpenSea', 'Smart Contracts', 'Ethereum'],
		description: 'Created an Elon Musk NFT smart contract on OpenSea, demonstrating advanced NFT development skills.'
	},
	{
		id: 'ethereum-token',
		title: 'Ethereum Token Creation',
		issuer: 'MetaSchool',
		date: '2024',
		image: '/image copy 3.png',
		skills: ['Ethereum', 'Token Development', 'Smart Contracts', 'ERC-20'],
		description: 'Created a custom Ethereum token in just 30 minutes, showcasing efficient smart contract development.'
	},
	{
		id: 'solidity-smart-contract',
		title: 'Solidity Smart Contract Development',
		issuer: 'MetaSchool',
		date: '2024',
		image: '/image copy 4.png',
		skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Blockchain Development'],
		description: 'Wrote first Solidity smart contract on Ethereum, demonstrating foundational blockchain development skills.'
	},
	{
		id: 'metamask-setup',
		title: 'MetaMask Account Setup',
		issuer: 'MetaSchool',
		date: '2024',
		image: '/image copy 5.png',
		skills: ['MetaMask', 'Web3 Wallets', 'Blockchain Integration', 'DApp Development'],
		description: 'Comprehensive understanding and setup of MetaMask accounts for Web3 application development.'
	}
];

export default function WebPage() {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
	const [selectedBadge, setSelectedBadge] = useState<NFTBadge | null>(null);

	return (
		<PageTransition>
			<section className="relative min-h-[70dvh] grid place-items-center overflow-hidden">
				<video src="/19784309-uhd_2160_3836_24fps.mp4" className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
				<div className="absolute inset-0 bg-black/55" />

				<motion.div style={{ y }} className="absolute inset-0 -z-10" />
				<div className="text-center relative z-10">
					<h2 className="text-4xl">Enter the Code Realm</h2>
					<div className="mt-3 text-neutral-300">Black, white, burnt orange — measured motion, sharp edges.</div>
					<a href="https://github.com/MichelleWambaya" target="_blank" rel="noreferrer" className="mt-8 inline-block border border-neutral-700 px-6 py-3 uppercase tracking-wide hover:bg-black/30">GitHub</a>
				</div>
			</section>

			{/* NFT Badges Section */}
			<section className="mt-12">
				<div className="uppercase text-[11px] tracking-wide text-neutral-500 mb-8">Web3 NFT Badges</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
					{nftBadges.map((badge) => (
						<div 
							key={badge.id}
							className="border border-neutral-800 bg-black/40 cursor-pointer hover:border-purple-400 hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
							onClick={() => setSelectedBadge(badge)}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedBadge(badge); } }}
						>
							<div className="h-32 bg-cover bg-center" style={{backgroundImage: `url('${badge.image}')`}} />
							<div className="p-3">
								<h4 className="font-serif text-sm">{badge.title}</h4>
								<p className="text-neutral-400 text-xs mt-1">{badge.issuer}</p>
								<div className="mt-2 text-purple-400 text-xs font-medium">Tap to view →</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Projects Section */}
			<section className="relative mt-16">
				<div className="h-64 w-full bg-[url('/pexels-junior-teixeira-1064069-2047905.jpg')] bg-cover bg-center" />
				<div className="absolute inset-0 bg-black/55" />
				<div className="relative z-10 p-8">
					<div className="uppercase text-[11px] tracking-wide text-neutral-500 mb-8">Web Projects</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<a href="https://github.com/mtoni1/MpesaFi-Prototype.github.io" target="_blank" rel="noreferrer" className="border border-neutral-800 p-8">
							<div className="flex items-center justify-between">
								<div className="font-semibold text-lg">MpesaFi Prototype</div>
								<div className="h-px w-10 bg-dusk" />
							</div>
							<p className="mt-3 text-neutral-400">Decentralized, mobile-first finance concept. Minimal UI, crisp flows.</p>
						</a>
						<a href="https://github.com/mtoni1/EcoLedger-prototype.github.io" target="_blank" rel="noreferrer" className="border border-neutral-800 p-8">
							<div className="flex items-center justify-between">
								<div className="font-semibold text-lg">EcoLedger Prototype</div>
								<div className="h-px w-10 bg-dusk" />
							</div>
							<p className="mt-3 text-neutral-400">Audit-style records for sustainability — authoritative visuals.</p>
						</a>
						<a href="https://github.com/mtoni1/AZ-FRONTEND-HTMLCSS" target="_blank" rel="noreferrer" className="border border-neutral-800 p-8">
							<div className="flex items-center justify-between">
								<div className="font-semibold text-lg">AZ Frontend</div>
								<div className="h-px w-10 bg-dusk" />
							</div>
							<p className="mt-3 text-neutral-400">Layout drills — grid discipline, typographic balance.</p>
						</a>
						<a href="https://github.com/MichelleWambaya/MichelleWambaya.github.io" target="_blank" rel="noreferrer" className="border border-neutral-800 p-8">
							<div className="flex items-center justify-between">
								<div className="font-semibold text-lg">Legacy Portfolio</div>
								<div className="h-px w-10 bg-dusk" />
							</div>
							<p className="mt-3 text-neutral-400">Earlier site — contrasts with the current cinematic build.</p>
						</a>
					</div>
				</div>
			</section>

			{/* Certificates Section - Moved to End */}
			<section className="mt-16">
				<div className="uppercase text-[11px] tracking-wide text-neutral-500 mb-8">Development Certifications</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
					{certificates.map((cert) => (
						<div 
							key={cert.id}
							className="border border-neutral-800 bg-black/40 cursor-pointer hover:border-dusk hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
							onClick={() => setSelectedCert(cert)}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedCert(cert); } }}
						>
							<div className="h-40 bg-cover bg-center" style={{backgroundImage: `url('${cert.image}')`}} />
							<div className="p-4">
								<h4 className="font-serif text-lg">{cert.title}</h4>
								<p className="text-neutral-400 text-xs mt-1">{cert.issuer} • {cert.date}</p>
								<p className="text-neutral-300 text-xs mt-2 line-clamp-2">{cert.description}</p>
								<div className="mt-3 text-dusk text-xs font-medium">Tap to view details →</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Enhanced Certificate Modal */}
			{selectedCert && (
				<Modal open={!!selectedCert} onClose={() => setSelectedCert(null)}>
					<div className="max-w-4xl mx-auto bg-black/95 p-8 border border-dusk">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<div className="h-80 bg-cover bg-center border border-neutral-700" style={{backgroundImage: `url('${selectedCert.image}')`}} />
							</div>
							<div>
								<h3 className="font-serif text-3xl text-dusk">{selectedCert.title}</h3>
								<p className="text-neutral-400 mt-2 text-lg">{selectedCert.issuer} • {selectedCert.date}</p>
								<p className="text-neutral-300 mt-4 text-base leading-relaxed">{selectedCert.description}</p>
								
								<div className="mt-8">
									<h4 className="font-serif text-xl mb-4 text-dusk">Skills & Competencies</h4>
									<div className="flex flex-wrap gap-3">
										{selectedCert.skills.map((skill, index) => (
											<span key={index} className="bg-dusk/20 border border-dusk/30 px-4 py-2 text-sm text-dusk">{skill}</span>
										))}
									</div>
								</div>
								
								<div className="mt-8 pt-6 border-t border-neutral-700">
									<button 
										onClick={() => setSelectedCert(null)}
										className="bg-dusk text-black px-6 py-2 font-medium hover:bg-dusk/80 transition-colors"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			)}

			{/* NFT Badge Modal */}
			{selectedBadge && (
				<Modal open={!!selectedBadge} onClose={() => setSelectedBadge(null)}>
					<div className="max-w-4xl mx-auto bg-black/95 p-8 border border-purple-400">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<div className="h-80 bg-cover bg-center border border-neutral-700" style={{backgroundImage: `url('${selectedBadge.image}')`}} />
							</div>
							<div>
								<h3 className="font-serif text-3xl text-purple-400">{selectedBadge.title}</h3>
								<p className="text-neutral-400 mt-2 text-lg">{selectedBadge.issuer} • {selectedBadge.date}</p>
								<p className="text-neutral-300 mt-4 text-base leading-relaxed">{selectedBadge.description}</p>
								
								<div className="mt-8">
									<h4 className="font-serif text-xl mb-4 text-purple-400">Skills & Technologies</h4>
									<div className="flex flex-wrap gap-3">
										{selectedBadge.skills.map((skill, index) => (
											<span key={index} className="bg-purple-400/20 border border-purple-400/30 px-4 py-2 text-sm text-purple-400">{skill}</span>
										))}
									</div>
								</div>
								
								<div className="mt-8 pt-6 border-t border-neutral-700">
									<button 
										onClick={() => setSelectedBadge(null)}
										className="bg-purple-400 text-black px-6 py-2 font-medium hover:bg-purple-400/80 transition-colors"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</PageTransition>
	);
}
