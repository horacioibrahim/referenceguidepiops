import React, { useState } from 'react';
import { CheckCircle, BookOpen, Target, Zap, Users, Star, ChevronDown, ArrowRight, Menu, X, HelpCircle, ShieldCheck } from 'lucide-react';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Product Innovation Ops
                    </div>

                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
                        <button onClick={() => scrollToSection('problems')} className="hover:text-white transition-colors">Diagnóstico</button>
                        <button onClick={() => scrollToSection('solution')} className="hover:text-white transition-colors">O Livro</button>
                        <button onClick={() => scrollToSection('learning')} className="hover:text-white transition-colors">O Que Aprender</button>
                        <button onClick={() => scrollToSection('author')} className="hover:text-white transition-colors">Autor</button>
                    </div>

                    <button
                        onClick={() => scrollToSection('pricing')}
                        className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        Garantir meu exemplar
                    </button>

                    <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4">
                        <button onClick={() => scrollToSection('problems')} className="text-left text-slate-300">Diagnóstico</button>
                        <button onClick={() => scrollToSection('solution')} className="text-left text-slate-300">O Livro</button>
                        <button onClick={() => scrollToSection('learning')} className="text-left text-slate-300">O Que Aprender</button>
                        <button onClick={() => scrollToSection('pricing')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold">
                            Garantir meu exemplar
                        </button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                            <Star className="w-4 h-4 fill-blue-400" />
                            <span>Lançamento Oficial</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Crie produtos que <span className="text-blue-400">funcionam de verdade</span> — mesmo em empresas caóticas.
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                            O guia definitivo para estruturar operações de produto, eliminar o desperdício e inovar com consistência.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('pricing')}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
                            >
                                Quero garantir meu exemplar
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scrollToSection('learning')}
                                className="px-8 py-4 rounded-lg font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2"
                            >
                                Ver o que vou aprender
                            </button>
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        <div className="relative w-3/4 mx-auto md:w-full max-w-md aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl border border-slate-700 flex items-center justify-center transform group-hover:rotate-y-6 transition-transform duration-500">
                            <div className="text-center p-8">
                                <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <BookOpen className="w-12 h-12 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Product Innovation Ops</h3>
                                <p className="text-slate-400">Como criar produtos singulares</p>
                            </div>
                            {/* Book Spine Effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-700/50 rounded-l-lg" />
                        </div>
                        {/* Shadow */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/50 blur-xl rounded-full" />
                    </div>
                </div>
            </section>

            {/* Diagnosis Section */}
            <section id="problems" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua empresa vive "apagando incêndio"?</h2>
                        <p className="text-slate-400 text-lg">Você não está sozinho. A maioria dos times de produto enfrenta o mesmo caos.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Falta de clareza na estratégia de produto",
                            "Decisões confusas e constante retrabalho",
                            "Times desalinhados e sem direção",
                            "Produtos que não evoluem e perdem mercado",
                            "Falta de processos claros para inovar",
                            "Sensação de estar sempre atrasado"
                        ].map((pain, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-red-500/30 transition-colors group">
                                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                                    <X className="w-4 h-4 text-red-400" />
                                </div>
                                <p className="text-slate-300">{pain}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                        <p className="text-blue-300 font-medium">
                            A culpa não é sua. O problema é a falta de um sistema operacional de inovação.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="py-20 relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                O manual prático para organizar o caos
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Este não é apenas mais um livro teórico. É um guia de referência para acompanhar você em cada etapa da jornada.
                                Criado para ser consultado sempre que você precisar tomar decisões
                                difíceis em Produto. Traz um ferramental prático, com frameworks
                                testados em empresas reais, para elevar imediatamente a maturidade
                                do seu time e acelerar a transformação dos seus produtos.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Prático, direto e sem enrolação",
                                    "Frameworks usados em empresas de alta performance",
                                    "Organiza a operação do zero ao avançado",
                                    "Ensina a tomar decisões baseadas em dados"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 md:order-2 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                            <div className="aspect-video bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800">
                                <span className="text-slate-500">Imagem do Livro Aberto / Interior</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Points */}
            <section id="learning" className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">O que você vai dominar</h2>
                        <p className="text-slate-400">Um currículo completo de Product Ops e Inovação</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Estratégia Real", desc: "Como tirar produtos do caos operacional e focar no que importa." },
                            { icon: Zap, title: "Produtos Singulares", desc: "O segredo para criar produtos que se destacam no mercado." },
                            { icon: BookOpen, title: "Product Ops", desc: "Como estruturar uma operação de produto eficiente." },
                            { icon: Users, title: "Alinhamento Total", desc: "Conecte pessoas, processos e decisões de negócio." },
                            { icon: CheckCircle, title: "Execução Impecável", desc: "Transforme ideias abstratas em entregas concretas." },
                            { icon: ShieldCheck, title: "Zero Desperdício", desc: "Evite retrabalho e foque recursos onde gera valor." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:bg-slate-800/50 transition-all hover:-translate-y-1">
                                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bonuses */}
            <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 md:p-12 rounded-3xl border border-blue-500/20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                            Bônus Exclusivos
                        </div>

                        <h2 className="text-3xl font-bold mb-8">Leve também gratuitamente</h2>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {[
                                { title: "Template de Roadmap", desc: "Planeje sua inovação com clareza." },
                                { title: "Board de Decisão", desc: "Template pronto para Jira/Notion." },
                                { title: "Mini-guia Product Ops", desc: "Implemente em 5 passos simples." }
                            ].map((bonus, i) => (
                                <div key={i} className="bg-slate-950/50 p-6 rounded-xl border border-slate-800">
                                    <div className="text-blue-400 font-bold text-lg mb-2">0{i + 1}</div>
                                    <h4 className="font-bold text-white mb-2">{bonus.title}</h4>
                                    <p className="text-slate-400 text-sm">{bonus.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-sm text-slate-400">
                            * Disponível apenas durante o período de lançamento.
                        </p>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section id="audience" className="py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-12">Para quem é este livro?</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Product Managers",
                            "Líderes de Inovação",
                            "Tech Leads",
                            "CEOs & Founders",
                            "PMO / Operações",
                            "Aspirantes a PM"
                        ].map((role, i) => (
                            <span key={i} className="px-6 py-3 bg-slate-800 rounded-full text-slate-300 border border-slate-700 font-medium">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Author */}
            <section id="author" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-48 h-48 bg-slate-800 rounded-full flex-shrink-0 border-4 border-slate-700 overflow-hidden">
                            {/* Placeholder for Author Image */}
                            <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500">Foto</div>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4">Sobre o Autor</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Com anos de experiência liderando produtos e operações em grandes empresas brasileiras,
                                o autor traz uma visão prática, sem jargões desnecessários, focada no que realmente funciona
                                no dia a dia das empresas de tecnologia.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                {/* Social Icons could go here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-16">O que estão dizendo</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Ana Silva", role: "Head de Produto", text: "Mudou completamente a forma como organizamos nosso time. Essencial!" },
                            { name: "Carlos Mendes", role: "CTO", text: "Finalmente um livro que une técnica e estratégia sem ser chato. Recomendo." },
                            { name: "Mariana Costa", role: "Product Manager", text: "Os templates bônus já valeram o investimento. Apliquei no dia seguinte." }
                        ].map((t, i) => (
                            <div key={i} className="p-8 bg-slate-800/30 rounded-2xl border border-slate-700 relative">
                                <div className="text-blue-500 text-4xl absolute top-4 left-4">"</div>
                                <p className="text-slate-300 mb-6 relative z-10 pt-4">{t.text}</p>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-sm text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantee & FAQ */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 max-w-3xl">
                    {/* Guarantee */}
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center gap-8 mb-20">
                        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <ShieldCheck className="w-12 h-12 text-green-400" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Garantia Incondicional de 7 Dias</h3>
                            <p className="text-slate-400">
                                Se você não gostar do conteúdo, devolvemos 100% do seu investimento. Sem perguntas, sem letras miúdas.
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Este livro serve para iniciantes?", a: "Sim! A linguagem é acessível e os conceitos são construídos do zero." },
                            { q: "É muito técnico?", a: "Não. O foco é em processos, estratégia e gestão, não em código." },
                            { q: "Quanto tempo para aplicar o método?", a: "Você pode começar a aplicar os frameworks imediatamente após a leitura." },
                            { q: "Recebo os bônus automaticamente?", a: "Sim, o acesso é enviado para seu e-mail logo após a compra." },
                            { q: "Funciona para empresas pequenas?", a: "Com certeza. Os princípios de Product Ops escalam desde startups até grandes corporações." }
                        ].map((faq, i) => (
                            <details key={i} className="group bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-900 transition-colors">
                                    <span className="font-medium text-slate-200">{faq.q}</span>
                                    <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="p-6 pt-0 text-slate-400 border-t border-slate-800/50">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="pricing" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Pronto para transformar sua carreira?
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Garanta seu exemplar agora e receba todos os bônus exclusivos de lançamento.
                    </p>

                    <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3 mx-auto">
                        Quero garantir meu exemplar agora
                        <ArrowRight className="w-6 h-6" />
                    </button>

                    <p className="mt-6 text-sm text-slate-500">
                        🔒 Pagamento 100% seguro • Acesso imediato aos bônus
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <div className="container mx-auto px-4">
                    <p>&copy; 2024 Product Innovation Ops. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
