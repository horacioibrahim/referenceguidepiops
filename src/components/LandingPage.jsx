import React, { useState } from 'react';
import { CheckCircle, BookOpen, Target, Zap, Users, Star, ChevronDown, ArrowRight, Menu, X, HelpCircle, ShieldCheck } from 'lucide-react';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        "/images/open_book/open_book_1.png",
        "/images/open_book/open_book_2.png",
        "/images/open_book/open_book_3.png",
        "/images/open_book/open_book_4.png"
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

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
                            <span>Black Friday Oficial</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Crie produtos que <span className="text-blue-400">funcionam de verdade</span> mesmo quando tudo parece urgente.
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
                        <div className="relative w-3/4 mx-auto md:w-full max-w-md transform group-hover:rotate-y-6 transition-transform duration-500">
                            <img
                                src="/images/book.png"
                                alt="Product Innovation Ops - Capa do Livro"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Você sente que está sempre "apagando incêndio"?</h2>
                        <p className="text-slate-400 text-lg">O custo disso não é apenas financeiro. É sua saúde mental e sua carreira em jogo.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Falta de clareza na estratégia de produto",
                            "Decisões confusas e constante retrabalho",
                            "Times desalinhados e sem propósito",
                            "Produtos que não evoluem e perdem mercado",
                            "Falta de processos claros para inovar",
                            "Sensação de estar sempre atrasado",
                            "Medo e crises de ansiedade por falta de clareza",
                            "Sensação constante de falta de foco",
                            "Risco de demissão por não conduzir bem as iniciativas",
                            "Invisibilidade nas mesas estratégicas"
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
                                    "Transforme caos em saúde mental",
                                    "Organiza a operação do zero ao avançado",
                                    "Guia prático de liderança no campo de batalha",
                                    "Sem teorias acadêmicas: 100% aplicável",
                                    "Torne-se um líder que serve e é ouvido"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 md:order-2 bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-2xl border border-slate-700 shadow-2xl relative group">
                            <div
                                className="aspect-video bg-slate-950 rounded-lg overflow-hidden cursor-pointer relative"
                                onClick={() => setIsModalOpen(true)}
                            >
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Interior do livro - Página ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                ))}
                                <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-xs text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Clique para ampliar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Points */}
            <section id="learning" className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Em 30 dias você vai...</h2>
                        <p className="text-slate-400">Sair completamente diferente de como começou.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Visão e Propósito", desc: "Construir uma cadeia de valor clara onde todos têm a mesma visão." },
                            { icon: Zap, title: "Gestão Sem Caos", desc: "Transformar sua gestão em algo estratégico, previsível e mensurável." },
                            { icon: Users, title: "Liderança Real", desc: "Ser um líder que serve, inspira confiança e é convidado para mesas estratégicas." },
                            { icon: ShieldCheck, title: "Segurança", desc: "Acabar com o medo e a ansiedade de não saber conduzir iniciativas." },
                            { icon: CheckCircle, title: "Entregas Reais", desc: "Entregar o certo, no tempo certo, superando expectativas." },
                            { icon: BookOpen, title: "Autonomia", desc: "Sem depender de formações caríssimas e demoradas." },
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

            {/* Chapters Section */}
            <section id="chapters" className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Capítulos do Livro</h2>
                        <p className="text-slate-400">Uma jornada completa pela gestão de produtos digitais, da inovação à execução.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { number: 1, title: "Introdução - como nasceu este livro", desc: "Uma jornada pessoal sobre a criação deste livro, explorando as motivações e experiências que levaram ao desenvolvimento de uma metodologia inovadora." },
                            { number: 2, title: "Introdução à gestão de produtos", desc: "Fundamentos essenciais da gestão de produtos digitais, estabelecendo as bases para compreender os conceitos apresentados no livro." },
                            { number: 3, title: "Organização do fluxo da inovação", desc: "Estruturação sistemática do processo de inovação, incluindo roadmapping e ciclo de desenvolvimento do produto." },
                            { number: 4, title: "Entendendo as partes do roadmap", desc: "Detalhamento dos componentes essenciais do roadmap e como eles se integram para criar um plano de produto efetivo." },
                            { number: 5, title: "Modelo de distribuição demandas", desc: "Framework para classificação e gerenciamento de tarefas, explorando ambidestria estratégica e cadeia de valor." },
                            { number: 6, title: "POps: Product Operations", desc: "Metodologia para operações de produto, incluindo gestão de demandas de última hora e processos bubble-up." },
                            { number: 7, title: "DISCOVERY", desc: "Processo estruturado para descoberta de produtos, focando na validação de hipóteses e pesquisa com usuários." },
                            { number: 8, title: "TAM (Task Allocation Matrix)", desc: "Sistema de alocação de tarefas para maximizar eficiência e produtividade das equipes." },
                            { number: 9, title: "RELEASES - a semântica da entrega", desc: "Estratégias para planejamento e execução de releases, com foco na comunicação efetiva." },
                            { number: 10, title: "FASES - fases ou status", desc: "Estruturação das diferentes etapas do desenvolvimento de produto e seus indicadores de progresso." },
                            { number: 11, title: "BORA - priorização com RICE e WSJF", desc: "Método de priorização combinando diferentes frameworks para tomada de decisão mais assertiva." },
                            { number: 12, title: "Prestação de contas", desc: "Métricas e indicadores para acompanhamento de performance e resultados do produto." },
                            { number: 13, title: "Product analytics", desc: "Análise de dados e métricas para tomada de decisão baseada em evidências no desenvolvimento de produtos." },
                            { number: 14, title: "Árvore de Oportunidade", desc: "Framework para identificação e avaliação sistemática de oportunidades de produto." },
                            { number: 15, title: "Batidão: em busca da batida perfeita", desc: "Metodologia para encontrar o ritmo ideal entre inovação e execução no desenvolvimento de produtos." },
                            { number: 16, title: "A3 Report", desc: "Técnica de documentação e resolução de problemas baseada em metodologia Toyota." },
                            { number: 17, title: "A4W's - As 4 semanas", desc: "Framework de planejamento e execução em ciclos de 4 semanas para maior agilidade." }
                        ].map((chapter, i) => (
                            <div key={i} className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-800 transition-all hover:border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 font-bold text-xl border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        {chapter.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{chapter.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{chapter.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 md:p-12 rounded-3xl border border-blue-500/20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                            Bônus Exclusivos
                        </div>

                        <h2 className="text-3xl font-bold mb-8">Leve também gratuitamente</h2>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {[
                                { title: "Planilha War Room", desc: "Classificação e organização tática.", price: "47" },
                                { title: "Canvas de Alinhamento", desc: "Uma visão, uma agenda e um propósito.", price: "149" },
                                { title: "Mini-guia 5 Passos", desc: "Estruture iniciativas do zero.", price: "97" },
                                { title: "Template JTBD", desc: "Job To Be Done pronto para usar." },
                                { title: "Template TAM/SAM/SOM", desc: "Descubra o tamanho do seu mercado." },
                                { title: "Value Stream Mapping", desc: "Mapa da Cadeia de valor padrao de processos ISO." }
                            ].map((bonus, i) => (
                                <div key={i} className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 flex flex-col h-full">
                                    <div className="text-blue-400 font-bold text-lg mb-2">0{i + 1}</div>
                                    <h4 className="font-bold text-white mb-2">{bonus.title}</h4>
                                    <p className="text-slate-400 text-sm mb-4 flex-grow">{bonus.desc}</p>
                                    {bonus.price && (
                                        <div className="text-slate-500 text-sm line-through font-mono">
                                            R$ {bonus.price},00
                                        </div>
                                    )}
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
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-start">

                        {/* Author Image Column */}
                        <div className="w-full md:w-1/3 flex flex-col items-center">
                            <div className="relative w-64 h-80 md:w-full md:h-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 group">
                                <img
                                    src="/images/author.png"
                                    alt="Horacio Ibrahim"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60"></div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full md:w-2/3 text-left">
                            <h2 className="text-4xl font-bold mb-2 text-white">Quem é Horácio Ibrahim?</h2>
                            <div className="h-1 w-20 bg-blue-500 mb-8"></div>

                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                <p>
                                    Horácio é uma das maiores mentes do mercado de produtos e inovação brasileiro. Sua trajetória é marcada por frameworks eficazes, insights robustos e a capacidade comprovada de transformar produtos em ativos estratégicos essenciais para o negócio.
                                </p>
                                <p>
                                    Com sólida experiência em gestão de produtos e certificações internacionais pela <strong>AIPMM, SAFe® e Universidade de Alberta</strong>, ele alia teoria, execução e estratégia para entregar valor real.
                                </p>
                                <p>
                                    Desde 2015, liderou iniciativas estratégicas na maior empresa pública de tecnologia da América Latina, criando produtos ("colab") com Amazon, Google e Microsoft.
                                </p>
                                <p>
                                    Em 2023, criou a <strong>Agnostic Data</strong>, plataforma que nasceu para resolver um dos maiores desafios das empresas modernas: transformar sinais de comportamento de usuários e eventos em decisões estratégicas. Hoje, atua como PMO na maior govtech do Brasil.
                                </p>
                            </div>

                            {/* Certification Logos */}
                            <div className="mt-10 flex flex-wrap gap-6 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Placeholders for logos - User should put images in public/images/ */}
                                <img src="/images/safe-logo.png" alt="SAFe Certified" className="h-16 object-contain" onError={(e) => e.target.style.display = 'none'} />
                                <img src="/images/aipmm-logo.png" alt="AIPMM Certified" className="h-16 object-contain" onError={(e) => e.target.style.display = 'none'} />
                                <img src="/images/uofa-logo.png" alt="University of Alberta" className="h-16 object-contain" onError={(e) => e.target.style.display = 'none'} />

                                {/* Fallback text if images are missing */}
                                <div className="flex gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <span>SAFe® Agilist</span>
                                    <span>•</span>
                                    <span>CPM AIPMM</span>
                                    <span>•</span>
                                    <span>Product Mgmt</span>
                                </div>
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
                            { name: "Sulivan Santiago", role: "CPO & CTO (Galileu Saúde)", text: "Este livro, nos apresenta a arquitetura completa de uma orquestra que toca a música que os negócios querem ouvir: produtos incríveis e inovadores que geram valor de verdade." },
                            { name: "Adriano Martins", role: "Product & Innovation Lead (Governo)", text: "Este livro apresenta uma abordagem séria e fundamentada, onde se configura como um guia prático imprescindível para organizar e aprimorar a gestão de produtos." },
                            { name: "Thiago Oliveira", role: "COO | CTO | CIO | Researcher | MSc", text: "O livro trás insights práticos de quem esteve à frente de grandes projetos de sucesso. Recomendo para todos os profissionais de TI que queiram montar times de alto desempenho." }
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

            {/* Summary Section */}
            <section className="py-20 bg-slate-950 border-t border-slate-900">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Resumindo:</h2>
                    <p className="text-xl text-slate-300 mb-12 font-medium">
                        Você terá acesso ao Guia de Referência Product Innovation Ops<br />
                        + 6 bônus acessíveis imediatamente:
                    </p>

                    <div className="mb-8">
                        <p className="text-2xl text-slate-400 mb-2">De: <span className="line-through text-red-500 decoration-2">R$ 472,29</span></p>
                        <p className="text-3xl font-bold text-white">Por apenas:</p>
                    </div>

                    <div className="space-y-4 max-w-2xl mx-auto">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 hover:border-slate-700 transition-colors">
                            <span className="text-slate-300 font-medium text-lg">à vista</span>
                            <span className="text-green-400 font-bold text-2xl">R$ 29,00</span>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 hover:border-slate-700 transition-colors">
                            <div className="text-left">
                                <span className="text-slate-300 font-medium text-lg block">Parcelado</span>
                                <span className="text-slate-500 text-sm">*O valor parcelado possui acréscimo</span>
                            </div>
                            <span className="text-green-400 font-bold text-2xl whitespace-nowrap">2 x R$ 15,26*</span>
                        </div>
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

                    <a
                        href="https://pay.hotmart.com/Y100672606O?off=890zcldg&bid=1763738147239"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ag_injection w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3 mx-auto"
                    >
                        Quero garantir meu exemplar agora
                        <ArrowRight className="w-6 h-6" />
                    </a>

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
            {/* Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div
                        className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt="Interior do livro ampliado"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
